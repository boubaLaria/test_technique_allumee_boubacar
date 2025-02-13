from fastapi import APIRouter, Depends, HTTPException
from schemas.index import SuccessResponse
from sqlalchemy.orm import Session
from schemas.Scene import SceneCreate, SceneResponse, SceneListCreate
from services.scene_services import create_scenes_bulk, get_scenes
from database.connection import get_db



router = APIRouter()

# Endpoint pour créer plusieurs scènes en une seule requête
@router.post("/create", response_model=SuccessResponse)
def create_scenes_bulk_endpoint(scene_list: SceneListCreate, db: Session = Depends(get_db)):
    return create_scenes_bulk(db, scene_list.scenes)

@router.get("/", response_model=list[SceneResponse])
def get_all_scenes(db: Session = Depends(get_db)):
    all_scenes = get_scenes(db)
    return [SceneResponse.from_orm(scene) for scene in all_scenes]
