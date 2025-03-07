from fastapi import FastAPI
from app.routes import auth_routes, reminder_routes

app = FastAPI(title="Wisdom", description="secret", version="0.1")

# Include Routes
app.include_router(auth_routes.router)
app.include_router(reminder_routes.router)
