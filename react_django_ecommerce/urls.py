from django.urls import path, re_path, include
from django.contrib import admin

from frontend_App import views
from django.conf.urls.static import static
from django.conf import settings
# from all_auth_extended.all_auth_extended import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api_App.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns.append(re_path(r'.*', views.main))
