import psycopg
from psycopg.rows import dict_row
from app.config import DATABASE_URL
def get_connection(): return psycopg.connect(DATABASE_URL)


def execute_query(query:str,params=None,fetchone=False,fetchAll=False):
    with get_connection() as connection:
        with connection.cursor(row_factory=dict_row) as cursor:
            cursor.execute(query,params)
            if fetchone:
                return cursor.fetchone()

            if fetchAll:
                return cursor.fetchall()