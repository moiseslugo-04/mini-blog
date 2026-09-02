from pydantic import BaseModel

class SocialLinkSchema(BaseModel):
    url:str
    name:str
    
class SocialLinkPartialSchema(BaseModel):
    url: str | None =None
    name: str | None = None