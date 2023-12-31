from django.urls import path, include
from rest_framework import routers
from app_gestion_dsm import views

router = routers.DefaultRouter()
router.register(r"pacientes", views.PacienteView, "pacientes")

urlpatterns = [path("api/v1/", include(router.urls))]
