from django.urls import path

from .views import register, profile,users_list

urlpatterns = [
    path('api/register/',register),
    path('profile/',profile),
    path('users/', users_list),

]