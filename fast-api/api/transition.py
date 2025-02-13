from fastapi import APIRouter, Depends, HTTPException
from schemas.index import SuccessResponse
from sqlalchemy.orm import Session
from schemas.Transition import TransitionResponse, TransitionListCreate
from services.transition_service import create_transition_bulk, get_transitions
from database.connection import get_db



router = APIRouter()

# Endpoint pour créer plusieurs transition en une seule requête
@router.post("/create", response_model=SuccessResponse)
def create_transition_bulk_endpoint(transtion_list: TransitionListCreate, db: Session = Depends(get_db)):
    return create_transition_bulk(db, transtion_list.transitions)

@router.get("/", response_model=list[TransitionResponse])
def get_all_transition(db: Session = Depends(get_db)):
    all_scenes = get_transitions(db)
    return [TransitionResponse.from_orm(scene) for scene in all_scenes]
