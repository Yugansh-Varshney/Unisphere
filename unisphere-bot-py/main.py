# main.py (Version 2 with Memory)
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from typing import List

from dotenv import load_dotenv
load_dotenv() 

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI()

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

class ChatMessage(BaseModel):
    id: str
    text: str
    sender: str

class ChatRequest(BaseModel):
    message: str
    history: List[ChatMessage]

@app.post("/chat")
async def handle_chat(request: ChatRequest):
    try:
        model = genai.GenerativeModel('models/gemini-flash-latest')

        formatted_history = []
        for msg in request.history:
            role = "user" if msg.sender == "user" else "model"
            formatted_history.append({"role": role, "parts": [{"text": msg.text}]})

        chat = model.start_chat(history=formatted_history)
        
        response = chat.send_message(request.message)

        return {"reply": response.text}
    except Exception as e:
        print(f"An error occurred: {e}")
        return {"error": str(e)}