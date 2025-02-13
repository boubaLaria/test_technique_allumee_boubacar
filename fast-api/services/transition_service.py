from sqlalchemy.orm import Session
from model.Transition import Transition
from schemas.Transition import  TransitionCreate,TransitionResponse
from schemas.index import SuccessResponse

def create_transition_bulk(db: Session, transitions: list[TransitionResponse]) -> SuccessResponse:
    # Vider la table Scene
    db.query(Transition).delete()
    db.commit()
    
    # Convertir les objets SceneCreate en instances SQLAlchemy
    db_transitions = [Transition(prevScene=transition.prevScene, nextScene=transition.nextScene,duration=transition.duration) for transition in transitions]
    for transition in db_transitions:
        db.add(transition)
        db.commit()
        db.refresh(transition)
    
    return SuccessResponse(message="Transitions created successfully")

def get_transitions(db: Session) -> list[Transition]:
    return db.query(Transition).all()