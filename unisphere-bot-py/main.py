# main.py (Version 2 with Memory)
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from typing import List # Import List for type hinting

# Load your API key from an environment variable for security
from dotenv import load_dotenv
load_dotenv() 

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# This creates our main "app"
app = FastAPI()

# --- IMPORTANT: CORS Middleware ---
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

# --- NEW: Define the structure for a single message in the history ---
class ChatMessage(BaseModel):
    id: str
    text: str
    sender: str

# --- UPDATED: The request now includes a list of past messages ---
class ChatRequest(BaseModel):
    message: str
    history: List[ChatMessage]

# This is our API endpoint for the chatbot
@app.post("/chat")
async def handle_chat(request: ChatRequest):
    try:
        model = genai.GenerativeModel('models/gemini-flash-latest')

        # --- NEW: Format the history for the Gemini API ---
        # The API expects roles of 'user' for the person and 'model' for the AI
        formatted_history = []
        for msg in request.history:
            role = "user" if msg.sender == "user" else "model"
            formatted_history.append({"role": role, "parts": [{"text": msg.text}]})

        # --- NEW: Start a chat session with the history ---
        chat = model.start_chat(history=formatted_history)
        
        # --- NEW: Send the new message within that session ---
        response = chat.send_message(request.message)

        return {"reply": response.text}
    except Exception as e:
        # It's helpful to print the error to your terminal for debugging
        print(f"An error occurred: {e}")
        return {"error": str(e)}