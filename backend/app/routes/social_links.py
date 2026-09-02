from fastapi import APIRouter, Depends
from app.services import social_links as social_links_services 
from app.schemas.social_links import SocialLinkPartialSchema, SocialLinkSchema
from app.auth.session import get_session
router = APIRouter(prefix='/social_links',tags=['Social_Links'])
@router.get('/')
def get_social_links():
    return social_links_services.get_all()

@router.get('/{user_id}')
def get_social_links_by_user_id(user_id):
    return social_links_services.get_by_user_id(user_id)

# POST
@router.post('/{user_id}')
def create_social_link(user_id,data:SocialLinkSchema):
    return social_links_services.create(user_id,data)

#PATH
@router.patch('/{link_id}')
def update_social_link(
    link_id,
    data:SocialLinkPartialSchema,
    session=Depends(get_session)):
    print(session,data)
    user_id =session['sub']
    return social_links_services.update(link_id,user_id,data)

#DELETE 
@router.delete('/{link_id}')
def delete_social_link():
    return {'message':'social link was deleted successful'}