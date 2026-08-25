from  app.core.database import get_connection 

# get all records
def get_all():
    with get_connection() as connection:
        with connection.cursor() as cursor:
            cursor.execute('SELECT * FROM users')
            return cursor.fetchall()
        
## get  user by email or username 
def get_by_identifier(identifier):
    with get_connection() as connection:
        with connection.cursor() as cursor:
            cursor.execute('SELECT * FROM users WHERE email=%s OR username=%s',(identifier,identifier,))
            return cursor.fetchone()

## get user by id
def get_by_id(user_id:str):
    with get_connection() as connection:
        with connection.cursor() as cursor:
            cursor.execute('SELECT * FROM users WHERE id=%s',(user_id,))
            return cursor.fetchone()

#Delete user by Id
def delete_by_id(user_id):
    with get_connection() as connection:
        with connection.cursor() as cursor:
            cursor.execute('DELETE FROM users WHERE id=%s ',(user_id,))
            message  = {'message':"User successfully Deleted"} if cursor.rowcount != 0 else  {'message':'User not found'}
            return message
            
            
