from pydantic import BaseModel

class SceneCreate(BaseModel):
    prevScene: str
    nextScene: str
    duration: int

class SceneResponse(BaseModel):
    id: int
    prevScene: str
    nextScene: str
    duration: int