from fastapi import APIRouter
from app.services import users as users_services
from fastapi import Request,Response
from app.schemas.users import  UserSchema
router = APIRouter(prefix='/users',tags=['Users'])

## GET
@router.get('/')
def get_users_route():
    return users_services.get_all()


@router.get('/by-identifier')
def get_user_by_identifier_route(identifier):
    return users_services.get_by_identifier(identifier)

@router.get('/{user_id}')
def get_user_by_id_route(user_id):
    return users_services.get_by_id(user_id)


## POST
@router.post('')
async def create_user(data_user:UserSchema):
    return {"message":f"User {data_user} create with success"}



# PUT
@router.put("/{user_id}")
def update_user(user_id:str):
 return {'message':f'user {user_id}'}

#PATCH
@router.patch("/{user_id}")
def update_partial_user(user_id):
 return {'message':f'user {user_id}'}
 
## DELETE 
@router.delete('/{user_id}')
def get_user_by_id_route(user_id):
    return users_services.delete_by_id(user_id)
