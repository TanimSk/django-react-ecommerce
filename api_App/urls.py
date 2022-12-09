from django.urls import path, include, re_path
# from dj_rest_auth.registration.views import VerifyEmailView
from . import views

urlpatterns = [
    path('', views.getDataP),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    # re_path(r'^dj-rest-auth/account-confirm-email/(?P<key>[-:\w]+)/$', VerifyEmailView.as_view(),
    #         name='account_email_verification_sent'),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]
# import dj_rest_auth.urls
# import dj_rest_auth.registration.urls
# http://127.0.0.1:8000/dj-rest-auth/registration/account-confirm-email/MQ:1p3FY3:BH4OC8GA1o_MCz1otaW6k6NI8OxPhd4V2-rda9SAsOc/
