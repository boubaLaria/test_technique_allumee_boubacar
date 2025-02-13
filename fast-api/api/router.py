from fastapi import APIRouter
from api import scene, transition

router = APIRouter()

# Inclure les routeurs des endpoints
router.include_router(scene.router, prefix="/scenes", tags=["scene"])
router.include_router(transition.router, prefix="/transitions", tags=["transition"])