
from  app.core.database import execute_query, get_connection
from app.schemas.users import UserCreateSchema, UserResponseSchema 
from app.core.exceptions import NotFoundError,ConflictError

# get all records
def get_all():
    return execute_query('SELECT id,name,username,email FROM users',fetchAll=True)       


## get  user by email or username 
def get_by_identifier(identifier):
    return execute_query('SELECT * FROM users WHERE email=%s OR username=%s',(identifier,identifier,),fetchone=True)




# Get user by email
def get_by_email(user_email):
    return execute_query('SELECT id,name,username,email FROM users WHERE email=%s',(user_email,),fetchone=True)


# Get user by username 
def get_by_username(username):
    return execute_query("SELECT id,name,username,email FROM users WHERE username=%s",(username,),fetchone=True)

## get user by id
def get_by_id(user_id:str):
        return execute_query('SELECT id,name,username,email FROM users WHERE id=%s',(user_id,),fetchone=True) 
    
    
#Delete user by Id
def delete_by_id(user_id):
    with get_connection() as connection:
        with connection.cursor() as cursor:
            cursor.execute('DELETE FROM users WHERE id=%s ',(user_id,))
            message  = {'message':"User successfully Deleted"} if cursor.rowcount != 0 else  {'message':'User not found'}
            return message
            
#Create User
def create_user(data:UserCreateSchema) -> UserResponseSchema:
  record =  execute_query('SELECT * FROM users WHERE email=%s OR username=%s',(data.email,data.username),fetchone=True)
  if record:
      raise ConflictError("User already exists")

  return execute_query('INSERT INTO users (name,username,email,password) VALUES (%s,%s,%s,%s) RETURNING id,name,username,email',
                      (data.name,data.username,data.email,data.password),fetchone=True)  
  


