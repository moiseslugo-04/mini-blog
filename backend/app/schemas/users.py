from pydantic import BaseModel

class UserCreateSchema(BaseModel):
    name:str
    email:str
    username:str
    password:str
    
class UserResponseSchema(BaseModel):
    username:str
    name:str
    email:str
class UserUpdateSchema(BaseModel):
    name:str | None = None
    email:str | None = None
    username:str | None = None
    
class UserUpdatePasswordSchema(BaseModel):
    password:str