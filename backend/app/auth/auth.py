from argon2 import PasswordHasher

ph = PasswordHasher()

def hash_password(password:str):
    return ph.hash(password)

def verify_password(password:str,hashed_password:str):
 try :
     ph.verify(hashed_password,password)
     return True
 except Exception:
     return False
