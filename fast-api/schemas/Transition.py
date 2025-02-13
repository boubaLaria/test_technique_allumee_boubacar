from pydantic import BaseModel

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