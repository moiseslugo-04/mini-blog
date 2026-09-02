from fastapi import Request
from fastapi.responses import JSONResponse
from app.core import  exceptions as Errors

def not_found_handler(req:Request,exc: Errors.NotFoundError):
    return JSONResponse(status_code=404,content={'details':str(exc)})

def database_error_handler(req:Request,exc: Errors.DatabaseError):
    return JSONResponse(status_code=500,content={'details':str(exc)})

def unauthorized_error_handler(req:Request,exc: Errors.UnauthorizedError):
    return JSONResponse(status_code=401,content={'details':str(exc)})


def forbidden_error_handler(req:Request,exc: Errors.ForbiddenError):
    return JSONResponse(status_code=403,content={'details':str(exc)})

def bad_request_error_handler(req:Request,exc: Errors.BadRequestError):
    return JSONResponse(status_code=400,content={'details':str(exc)})

def conflict_error_handler(req:Request,exc: Errors.ConflictError):
    return JSONResponse(status_code=409,content={'details':str(exc)})