from fastapi import APIRouter
from app.services import social_links as social_links_services 
from app.schemas.social_links import SocialLinkSchema
router = APIRouter(prefix='/users',tags=['Social_Links'])
@router.get('/social_links')
def get_socila_links():
    return social_links_services.get()

@router.get('/{user_id}/social_links')
def get_socila_links(user_id):
    return social_links_services.get_by_user_id(user_id)

# POST
@router.post('/{user_id}/social_linkns')
def create_social_links(user_id,data:SocialLinkSchema):
    return social_links_services.create(user_id,data)

#PATHC
@router.patch('/{user_id}/social_link')
def update_social_links():
    return {"message":"social links updated successfull"}

#DELETE 
@router.delete('/social_links/{link_id}')
def delete_social_link():
    return {'message':'social link was delted sucessfull'}