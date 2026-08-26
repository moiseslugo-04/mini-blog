from pydantic import BaseModel


class AuthLoginSchema(BaseModel):
    identifier:str
    password:str

class AuthResponseSchema(BaseModel):
    username:str
    email:str
    token:str
    
    