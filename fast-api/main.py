from fastapi import FastAPI
from api.router import router 
from database.connection import  engine
from model import Scene, Transition

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

Scene.Base.metadata.create_all(bind=engine)
Transition.Base.metadata.create_all(bind=engine)

app = FastAPI()
# Liste des origines autorisées 
origins = [
    "http://localhost:3000",  
]

# Ajouter le middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)
app.include_router(router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}