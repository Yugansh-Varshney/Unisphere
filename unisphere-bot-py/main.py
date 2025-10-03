# main.py
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai

# Load your API key from an environment variable for security
from dotenv import load_dotenv
load_dotenv() 

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# This creates our main "app"
app = FastAPI()

# --- IMPORTANT: CORS Middleware ---
# This allows your React app (running on localhost:3000) 
# to talk to this Python server.
origins = [
    "http://localhost:3000",
    "https://your-deployed-unisphere-app.com", # Add your production URL later
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the structure of the incoming message
class ChatRequest(BaseModel):
    message: str

# This is our API endpoint for the chatbot
@app.post("/chat")
async def handle_chat(request: ChatRequest):
    try:
        # This is the same Gemini logic as before, just in Python
        model = genai.GenerativeModel('models/gemini-flash-latest')
        response = model.generate_content(request.message)

        return {"reply": response.text}
    except Exception as e:
        return {"error": str(e)}