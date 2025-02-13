from sqlalchemy import Column, Integer, String
from database.connection import Base

class Transition(Base):
    __tablename__ = "transition"
    id = Column(Integer, primary_key=True, index=True)
    prevScene = Column(String, index=True)
    nextScene = Column(String, index=True)
    duration = Column(Integer, index=True)

