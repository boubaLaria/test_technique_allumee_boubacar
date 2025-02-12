from sqlalchemy import Column, Integer, String
from database.connection import Base

class Scene(Base):
    __tablename__ = "scene"
    id = Column(Integer, primary_key=True, index=True)
    prevScene = Column(String, index=True)
    nextScene = Column(String, index=True)
    duration = Column(Integer, index=True)