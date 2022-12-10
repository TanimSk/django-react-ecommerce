from allauth.account.adapter import DefaultAccountAdapter

<<<<<<< HEAD


class LoginViewExtended(LoginView):
    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        if form.is_valid():
            response = self.form_valid(form)
            return JsonResponse({'status': 'OK'})
        else:
            return JsonResponse({
                'status': 'ERROR',
                'errors': form.errors
            })


class SignUpViewExtended(SignupView):

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        if form.is_valid():
            response = self.form_valid(form)
            return JsonResponse({'status': 'OK'})
        else:
            return JsonResponse({
                'status': 'ERROR',
                'errors': form.errors
            })


class SignUpFormExtended(SignupForm):
    first_name = forms.CharField(max_length=30, label='First Name')
    last_name = forms.CharField(max_length=30, label='Last Name')

    def save(self, request):
        user = super(SignUpFormExtended, self).save(request)
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.save()
        return user
=======
class AccountAdapter(DefaultAccountAdapter):
    def get_email_confirmation_url(self, request, emailconfirmation):
        return f'http://localhost:3000/email-verify/{emailconfirmation.key}'
>>>>>>> django_drf
