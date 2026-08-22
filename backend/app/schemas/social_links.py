from pydantic import BaseModel

class SocialLinkSchema(BaseModel):
    url:str
    name:str
    
class SocialLinkPartialSchema(BaseModel):
    id:str
    url: str | None
    name: str | None