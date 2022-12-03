from ninja import NinjaAPI, Form, Schema

api = NinjaAPI()

# ------ Schemas -------


class Signup(Schema):
    first_name: str
    last_name: str
    email: str
    password1: str
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


@api.post('/test')
def signup(request):

    return {
        "response": request.user.is_authenticated
    }