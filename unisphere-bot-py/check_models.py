import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load the same .env file
load_dotenv()

try:
    # Get the key
    api_key = os.getenv("GEMINI_API_KEY")
    
    if not api_key:
        print("❌ Error: Could not find your GEMINI_API_KEY in the .env file.")
    else:
        genai.configure(api_key=api_key)
        print("✅ API key configured. Asking Google for a list of available models...\n")

        # The important part: list all models
        print("--- Models available for you ---")
        model_found = False
        for m in genai.list_models():
            if 'generateContent' in m.supported_generation_methods:
                print(f"✔️ {m.name}")
                model_found = True
        
        if not model_found:
            print("❌ No models that support 'generateContent' were found for your account.")
            print("This usually means you need to enable the 'Generative Language API' in your Google Cloud project.")

except Exception as e:
    print(f"\n❌ An error occurred while trying to talk to Google: {e}")