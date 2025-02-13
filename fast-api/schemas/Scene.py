from typing import List
from pydantic import BaseModel

class SceneCreate(BaseModel):
    name: str
    duration: int

    class Config:
        from_attributes = True

class SceneResponse(BaseModel):
    id: int
    name: str
    duration: int
    class Config:
        from_attributes = True

# Schéma pour accepter une liste de scènes
class SceneListCreate(BaseModel):
    scenes: List[SceneCreate]
    class Config:
        from_attributes = True