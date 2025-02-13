
from fastapi import APIRouter, Depends, HTTPException
from schemas.index import SuccessResponse
from sqlalchemy.orm import Session
from schemas.Scene import SceneCreate, SceneResponse, SceneListCreate
from services.scene_services import create_scenes_bulk
from database.connection import SessionLocal

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter()

# Endpoint pour créer plusieurs scènes en une seule requête
@router.post("/create", response_model=SuccessResponse)
def create_scenes_bulk_endpoint(scene_list: SceneListCreate, db: Session = Depends(get_db)):
    return create_scenes_bulk(db, scene_list.scenes)