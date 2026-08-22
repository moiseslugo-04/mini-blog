from fastapi import HTTPException, status
from app.schemas.social_links import SocialLinkPartialSchema, SocialLinkSchema
from psycopg.errors import ForeignKeyViolation
from app.core.database import execute_query

def create(user_id, data: SocialLinkSchema):
    query = """
        INSERT INTO social_links (user_id, platform_name, platform_url)
        VALUES (%s, %s, %s) 
        RETURNING id, user_id, platform_name, platform_url;
    """
    try:
        result = execute_query(query, (user_id, data.name, str(data.url)))
        return result

    except ForeignKeyViolation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User with ID '{user_id}' not found"
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error trying to save data"
        )

def update(user_id, data: SocialLinkPartialSchema):
    query = """
        UPDATE social_links 
        SET platform_name = %s, platform_url = %s 
        WHERE id = %s AND user_id = %s 
        RETURNING id, user_id, platform_name, platform_url;
    """
            
    try:
        result = execute_query(
            query, 
            (data.name, str(data.url), data.id, user_id), 
            fetchone=True
        )
        
        if not result:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Social link with ID '{data.id}' not found for user '{user_id}'"
            )
            
        return result

    except ForeignKeyViolation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User with ID {user_id} NOT found"
        )
    except HTTPException:
        # Re-lança o 404 levantado no 'if not result'
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error trying to update social links"
        )
        
def get():
    return execute_query('SELECT platform_name,platform_name,id,user_id FROM social_links',fetchone=True)


def get_all():
    # fetchone=False (ou fetchall=True) para trazer TODOS os registros de todos os usuários
    query = """
        SELECT id, user_id, platform_name, platform_url 
        FROM social_links;
    """
    try:
        result = execute_query(query, fetchall=True)
        return result if result else []
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error fetching social links"
        )


def get_by_id(social_link_id: int):
    query = """
        SELECT id, user_id, platform_name, platform_url 
        FROM social_links 
        WHERE id = %s;
    """
    try:
        result = execute_query(query, (social_link_id,), fetchone=True)
        
        if not result:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Social link with ID '{social_link_id}' not found"
            )
            
        return result
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error fetching social link"
        )


def get_by_user_id(user_id: str):
    query = """
        SELECT id, user_id, platform_name, platform_url 
        FROM social_links 
        WHERE user_id = %s;
    """
    try:
        result = execute_query(query, (user_id,), fetchall=True)
        
        if not result:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"No social links found for user '{user_id}'"
            )
            
        return result
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error fetching user social links"
        )