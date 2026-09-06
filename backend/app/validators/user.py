

def validate_email(value):
        if value is not None and '@' not in value:
            raise ValueError('Invalid email address')
        return value
    
    
def validate_string(value,field_name:str):  
        if value is not None and len(value) < 3:
            raise ValueError(f'{field_name.upper()}: must be at least 3 characters long')
        return value
    
def validate_password(value):
        if value is not None and len(value) < 6:
            raise ValueError('Password must be at least 6 characters long')
        return value
    
    
def validate_bio(value):
        if value is not None and len(value) < 10:
            raise ValueError('Bio must be at least 10 characters long')
        return value
    
def avatar_url_validator(value):
        if value is not None and not value.startswith('http'):
            raise ValueError('Invalid avatar URL')
        return value