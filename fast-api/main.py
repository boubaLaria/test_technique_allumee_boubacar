from fastapi import FastAPI
# from api.v1.routers import router as v1_router

app = FastAPI()

# app.include_router(v1_router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}