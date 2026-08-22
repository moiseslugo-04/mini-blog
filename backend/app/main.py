from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.users import router as users_router
from app.routes.auth import router as auth_router
from app.routes.social_links import router as social_links_router
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://www.moiseslugo.com","http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router)
app.include_router(auth_router)
app.include_router(social_links_router)