from django.urls import path, include, re_path
# from dj_rest_auth.registration.views import VerifyEmailView
from . import views

urlpatterns = [
    path('is-valid/', views.is_valid),

    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]

# import dj_rest_auth.urls
# import dj_rest_auth.registration.urls
