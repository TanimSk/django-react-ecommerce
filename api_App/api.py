import json
from ninja import NinjaAPI, Form, Schema

api = NinjaAPI()

# ------ Schemas -------
class Signup(Schema):
    fname: str
    lname: str
    email: str
    pswd: str
    csrfmiddlewaretoken: str

class Login(Schema):
    email: str
    pswd: str


# ----- Methods ------
@api.post('/signup')
def signup(request, credentials: Signup = Form(...)):
    
    return {
        "response": "OK"
    }


@api.post('/login')
def signup(request, credentials: Login = Form(...)):
    
    return {
        "response": "OK"
    }