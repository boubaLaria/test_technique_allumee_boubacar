from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import   declarative_base

DATABASE_URL = "postgresql://laria:lawratou@localhost/showcase"


engine = create_engine(DATABASE_URL, echo=True)

# Création de la session asynchrone
SessionLocal = sessionmaker(bind=engine, autoflush= False, autocommit=False)

# Définition de la base des modèles
Base = declarative_base()


