from fastapi import HTTPException, Response,Request
from app.config import ACCESS_TOKEN_EXPIRE_MINUTES
from datetime import datetime , timedelta,timezone
from app.auth.jwt import decrypt, encrypt

def create_session(res:Response,user_id):
    expiresAt =datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = encrypt(user_id,expiresAt)
    res.set_cookie(
        key='access_token',value=access_token,
        httponly=True,secure=False,samesite='lax',
        expires=expiresAt
        )   
    return {'message':'Session Created','expiresAt':expiresAt} 
    
def get_session(req:Request):
    token = req.cookies.get('access_token')
    if not token :
        raise HTTPException(status_code=401,detail='Not Authenticated')

    payload = decrypt(token)

    if not payload:
        raise HTTPException(status_code=401,detail='Invalid token or expired')

    return payload

def logout(res:Response):
    res.delete_cookie('access_token')
  