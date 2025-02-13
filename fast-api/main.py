from fastapi import FastAPI
from api.router import router 
from database.connection import  engine
from model import Scene, Transition


Scene.Base.metadata.create_all(bind=engine)
Transition.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}