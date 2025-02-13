from sqlalchemy.orm import Session
from model.Scene import Scene
from schemas.Scene import SceneCreate, SceneResponse
from schemas.index import SuccessResponse

def create_scenes_bulk(db: Session, scenes: list[SceneResponse]) -> SuccessResponse:
    # Convertir les objets SceneCreate en instances SQLAlchemy
    db_scenes = [Scene(name=scene.name, duration=scene.duration) for scene in scenes]
    print(db_scenes)
    db_scene = db.query(Scene).filter(Scene.id == 1).first()
    print(db_scene)
    for scene in db_scenes:
        db.add(scene)
        db.commit()
        db.refresh(scene)
    
 
    return SuccessResponse(message="Scenes created successfully")