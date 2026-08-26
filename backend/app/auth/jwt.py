from app.config import SECRET_KEY
from uuid import UUID
import jwt

ALGORITHM ='HS256'

def encrypt(user_id:UUID,expiresAt):
    payload ={'sub':str(user_id) ,'exp':expiresAt}
    return jwt.encode(payload,SECRET_KEY,algorithm=ALGORITHM)


def decrypt(token:str):
    try : 
        payload = jwt.decode(token,SECRET_KEY,algorithms=[ALGORITHM])
        return payload
    except jwt.InvalidTokenError:
     return None
 
 
 
