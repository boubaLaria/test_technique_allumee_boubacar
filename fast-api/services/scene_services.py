from sqlalchemy.orm import Session
from model.Scene import Scene
from schemas.Scene import SceneCreate, SceneResponse
from schemas.index import SuccessResponse

def create_scenes_bulk(db: Session, scenes: list[SceneResponse]) -> SuccessResponse:
    # Vider la table Scene
    db.query(Scene).delete()
    db.commit()
    
    # Convertir les objets SceneCreate en instances SQLAlchemy
    db_scenes = [Scene(name=scene.name, duration=scene.duration) for scene in scenes]
    for scene in db_scenes:
        db.add(scene)
        db.commit()
        db.refresh(scene)
    
    return SuccessResponse(message="Scenes created successfully")

def get_scenes(db: Session) -> list[Scene]:
    return db.query(Scene).all()