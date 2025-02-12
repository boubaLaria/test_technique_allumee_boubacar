from pydantic import BaseModel

class SceneCreate(BaseModel):
    name: str
    duration: int

class SceneResponse(BaseModel):
    id: int
    name: str
    duration: str