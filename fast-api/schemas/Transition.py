from pydantic import BaseModel
from typing import List
class TransitionCreate(BaseModel):
    prevScene: str
    nextScene: str
    duration: int
    class Config:
        from_attributes = True

class TransitionResponse(BaseModel):
    id: int
    prevScene: str
    nextScene: str
    duration: int
    class Config:
        from_attributes = True

class TransitionListCreate(BaseModel):
    transitions: List[TransitionCreate]
    class Config:
        from_attributes = True