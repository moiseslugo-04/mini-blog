import psycopg
from psycopg.rows import dict_row
from app.config import DATABASE_URL
from app.core.exceptions import DatabaseError

def get_connection(): 
    try :
        return psycopg.connect(DATABASE_URL)
    except Exception as e:
        print("Error connecting to the database:", e)
        raise DatabaseError("Database connection error") 


def execute_query(query:str,params=None,fetchone=False,fetchAll=False):
    with get_connection() as connection:
        with connection.cursor(row_factory=dict_row) as cursor:
            cursor.execute(query,params)
            if fetchone:
                return cursor.fetchone()

            if fetchAll:
                return cursor.fetchall()