from django.urls import path, include, re_path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [

    path('products/', views.products_detail, name='products'),

    # ---------- Auth ------------
    path('is-valid/', views.is_valid),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('get-access-token/', TokenRefreshView.as_view(), name='get-access-token'),

    path('user-profile/', views.user_profile, name='user_profile')

]

# import dj_rest_auth.urls
# import dj_rest_auth.registration.urls
