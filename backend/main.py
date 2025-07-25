from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import joblib
from fastapi.middleware.cors import CORSMiddleware

model = joblib.load("models/logistic_model.pkl")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or restrict to ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PredictionRequest(BaseModel):
    age: float
    gender: int  # 0 or 1
    education: int  # 1-4
    experience: float
    previousCompanies: float
    distance: float
    interviewScore: float
    skillScore: float
    personalityScore: float
    recruitmentStrategy: int  

@app.post("/predict")
def predict(features: PredictionRequest):
    # Convert input to a 2D array (1 sample, n features)
    input_array = np.array([[
        features.age,
        features.gender,
        features.education,
        features.experience,
        features.previousCompanies,
        features.distance,
        features.interviewScore,
        features.skillScore,
        features.personalityScore,
        features.recruitmentStrategy
    ]])

    prediction = model.predict(input_array)[0]
    result = "Selected" if prediction == 1 else "Not Selected"
    return {"decision": result}