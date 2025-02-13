from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "postgresql+asyncpg://laria:lawratou@localhost/showcase"

# Création du moteur SQLAlchemy
engine = create_async_engine(DATABASE_URL, echo=True)

# Création de la session asynchrone
SessionLocal = sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)

# Définition de la base des modèles
Base = declarative_base()

# Fonction pour récupérer une session de base de données dans FastAPI
async def get_db():
    async with SessionLocal() as session:
        yield session
