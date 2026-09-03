from fastapi import APIRouter,Response,Request
from app.schemas.auth import AuthLoginSchema

from app.services.auth import user_login
from app.auth.session import create_session

router = APIRouter(prefix='/auth',tags=["Auth"])

@router.post('/login')
def login(data:AuthLoginSchema,res:Response):
    user_id = user_login(data)
    create_session(res,user_id)
    return {'message':'Login Successful'}

@router.post('/logout')
def logout(req:Request,res:Response):
    res.delete_cookie(
        key='access_token',
        httponly=True,
        secure=True,
        samesite='lax'
    )
    return {'message':'Logout Successful'}    
 
 