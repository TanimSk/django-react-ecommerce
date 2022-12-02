from django.urls import path, re_path, include
from django.contrib import admin

from frontend_App import views
from api_App import api
from all_auth_extended.all_auth_extended import *

urlpatterns = [
    path('admin/', admin.site.urls),
    # API
    path('api/', api.api.urls),
    # ALL Auth
    path('Login/', LoginViewExtended.as_view(), name='Login'),
    path('Signup/', SignUpViewExtended.as_view(), name='Login'),
    path('accounts/', include('allauth.urls')),
    # Frontend
    re_path(r'.*', views.main),
]
