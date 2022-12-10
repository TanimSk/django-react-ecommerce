from django.urls import path, re_path, include
from django.contrib import admin

from frontend_App import views
# from all_auth_extended.all_auth_extended import *

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', include('api_App.urls')),
    # ALL Auth
    # path('Login/', LoginViewExtended.as_view(), name='Login'),
    # path('Signup/', SignUpViewExtended.as_view(), name='Signup'),
    # path('accounts/', include('allauth.urls')),
    # Frontend
    # re_path(r'.*', views.main),
]
