from pydantic import BaseModel
class SuccessResponse(BaseModel):
    message: str
    class Config:
        from_attributes = True