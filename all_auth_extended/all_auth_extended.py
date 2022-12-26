from allauth.account.adapter import DefaultAccountAdapter

class AccountAdapter(DefaultAccountAdapter):
    def get_email_confirmation_url(self, request, emailconfirmation):
        # return f'http://localhost:3000/email-verify/{emailconfirmation.key}'
        # return f'http://127.0.0.1:8000/email-verify/{emailconfirmation.key}'
        return f'https://django-react-ecommerce-production.up.railway.app/{emailconfirmation.key}'