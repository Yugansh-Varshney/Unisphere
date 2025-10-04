# unisphere-planner-py/main.py (Final Tutor Version)

import os
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from supabase import create_client, Client
import google.generativeai as genai
import json
from typing import List
from datetime import date, timedelta
from fastapi.middleware.cors import CORSMiddleware # <-- THIS WAS THE MISSING LINE

load_dotenv()

# --- Initialize Clients ---
supabase_url = os.getenv("SUPABASE_URL")
service_key = os.getenv("SUPABASE_SERVICE_KEY")
supabase: Client = create_client(supabase_url, service_key)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI()

# --- CORS Middleware ---
origins = [
    "http://localhost:3000",
    "https://your-deployed-unisphere-app.com",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PlanRequest(BaseModel):
    user_id: str

@app.post("/generate-plan")
async def generate_plan(request: PlanRequest):
    user_id = request.user_id
    print(f"Generating TUTOR plan for user: {user_id}")

    try:
        # 1. Fetch data from Supabase
        subjects_res = supabase.table('subjects').select('id, subject_name').eq('user_id', user_id).execute()
        topics_res = supabase.table('syllabus_topics').select('subject_id, topic_name').eq('user_id', user_id).execute()

        if not subjects_res.data:
            return {"error": "No subjects found for this user. Please add subjects first."}

        learning_data = "The student is studying the following subjects and topics:\n"
        for subject in subjects_res.data:
            learning_data += f"\nSubject: {subject['subject_name']}\n"
            learning_data += "Topics:\n"
            subject_topics = [t['topic_name'] for t in topics_res.data if t['subject_id'] == subject['id']]
            if subject_topics:
                for topic_name in subject_topics:
                    learning_data += f"- {topic_name}\n"
            else:
                learning_data += "- No topics listed for this subject yet.\n"

        # 2. The New, Upgraded Prompt
        prompt = f"""
        You are an expert academic tutor and coach for a university student.
        Your task is to create a detailed, helpful, 7-day study plan based on their subjects and topics.
        **Student's Data:**
        {learning_data}
        **Your Instructions (VERY IMPORTANT):**
        1.  For each topic, break it down into smaller, specific learning objectives.
        2.  For each objective, create a concrete task (e.g., 'Reading', 'Practice Problems', 'Watch Tutorial').
        3.  For each task, provide a `details` string explaining WHAT to study (e.g., "Focus on BFS and DFS traversal methods").
        4.  For each task, suggest ONE high-quality, public, real online `suggested_resource` URL (e.g., a specific YouTube video from a reputable channel, a GeeksforGeeks article, a relevant LeetCode problem, or a Wikipedia page).
        5.  Create a schedule for the next 7 days.
        6.  Return the plan as a JSON object. The object must be a single key "tasks" which is a list.
        7.  Each task object in the list MUST have these EXACT six keys: "topic_name", "task_type", "day", "duration_minutes", "details", "suggested_resource".
        8.  The `topic_name` must EXACTLY match a topic from the student's data.
        """

        # 3. Call the Gemini API
        print("Calling Gemini API with TUTOR prompt...")
        model = genai.GenerativeModel('models/gemini-flash-latest')
        response = model.generate_content(prompt)
        
        cleaned_response = response.text.strip().replace('```json', '').replace('```', '')
        print(f"AI Response received: {cleaned_response}")

        # 4. Parse the AI's response
        plan = json.loads(cleaned_response)
        ai_tasks = plan.get("tasks", [])

        if not ai_tasks:
            return {"error": "The AI could not generate a plan. Please ensure you have topics listed."}

        # 5. Save the tasks to Supabase
        print("Saving detailed tasks to Supabase...")
        all_topics_res = supabase.table('syllabus_topics').select('id, topic_name').eq('user_id', user_id).execute()
        topic_map = {topic['topic_name']: topic['id'] for topic in all_topics_res.data}
        
        tasks_to_insert = []
        today = date.today()
        for task in ai_tasks:
            topic_id = topic_map.get(task['topic_name'])
            if topic_id:
                scheduled_date = today + timedelta(days=task.get('day', 1) - 1)
                tasks_to_insert.append({
                    "user_id": user_id,
                    "topic_id": topic_id,
                    "task_type": task.get('task_type', 'Study'),
                    "scheduled_date": str(scheduled_date),
                    "duration_minutes": task.get('duration_minutes', 60),
                    "status": "pending",
                    "details": task.get('details'),
                    "suggested_resource": task.get('suggested_resource')
                })

        if tasks_to_insert:
            supabase.table('study_tasks').delete().eq('user_id', user_id).execute()
            insert_res = supabase.table('study_tasks').insert(tasks_to_insert).execute()
            if insert_res.data:
                print(f"Successfully inserted {len(insert_res.data)} detailed tasks.")
                return {"message": f"Successfully generated and saved {len(insert_res.data)} detailed study tasks."}
            else:
                raise Exception(f"Failed to insert tasks into database. Supabase error: {insert_res.error}")
        else:
            return {"message": "No valid tasks to insert."}

    except Exception as e:
        print(f"An error occurred in generate_plan: {e}")
        return {"error": str(e)}