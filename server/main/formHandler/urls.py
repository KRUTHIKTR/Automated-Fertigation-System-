from django.urls import path
from .views import handleSubmit

urlpatterns = [
    path('form', handleSubmit)
]