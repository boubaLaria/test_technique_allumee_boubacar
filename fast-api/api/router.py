from fastapi import APIRouter
from api import scene

router = APIRouter()

# Inclure les routeurs des endpoints
router.include_router(scene.router, prefix="/scene", tags=["scene"])