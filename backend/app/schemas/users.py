from pydantic import BaseModel

class UserSchema(BaseModel):
    name:str
    email:str
    username:str
    password:str
    
    
class UserPartialSchema(BaseModel):
    name:str | None = None
    email:str | None = None
    username:str | None = None
    
class UserPasswordSchema(BaseModel):
    password:str