from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.users import router as users_router
from app.routes.auth import router as auth_router
from app.routes.social_links import router as social_links_router
from app.core import  exceptions as Errors
from app.core import exception_handlers as handlers

app = FastAPI()
origins = [
    "https://www.moiseslugo.com",
    "https://moiseslugo.com",
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router)
app.include_router(auth_router)
app.include_router(social_links_router)

app.add_exception_handler(Errors.NotFoundError,handlers.not_found_handler)
app.add_exception_handler(Errors.DatabaseError,handlers.database_error_handler)
app.add_exception_handler(Errors.UnauthorizedError,handlers.unauthorized_error_handler)
app.add_exception_handler(Errors.ForbiddenError,handlers.forbidden_error_handler)
app.add_exception_handler(Errors.BadRequestError,handlers.bad_request_error_handler)
app.add_exception_handler(Errors.ConflictError,handlers.conflict_error_handler)