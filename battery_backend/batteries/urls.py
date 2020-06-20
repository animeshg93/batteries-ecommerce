from django.urls import path

from . import views

urlpatterns = [
    path('getBatteries/', views.getBatteries, name='getBatteries'),
    path('validateBatteryQuantity/', views.validateBatteryQuantity, name='validateBatteryQuantity'),
    path('getBatteries/<slug:slug>', views.getSingleBattery, name='getSingleBattery'),
]