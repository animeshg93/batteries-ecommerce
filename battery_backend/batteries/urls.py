from django.urls import path

from . import views

urlpatterns = [
    path('batteries/', views.getBatteries, name='batteries'),
]