from app.schemas.auth import AuthLoginSchema
from app.services.users import get_by_identifier
from app.auth.auth import verify_password
from app.auth.jwt import decrypt


def  user_login(data:AuthLoginSchema):
    user = get_by_identifier(data.identifier)
    if not user:
        raise ValueError("Username or email are invalid")
    
    if not verify_password(data.password,user['password_hash']):
        raise ValueError("Username or password are wrong try again")
    return user['id']
