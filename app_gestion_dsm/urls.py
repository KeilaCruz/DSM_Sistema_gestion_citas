from django.urls import path, include
from rest_framework import routers
from app_gestion_dsm import views

router = routers.DefaultRouter()

router.register(r"pacientes", views.PacienteView, "pacientes")
router.register(r"hojaClinica", views.HojaClinicaView, "hojaClinica")
router.register(r"roles", views.RolView, "roles")
router.register(r"usuarios", views.UsuarioView, "usuarios")
router.register(r"examenMedico", views.NotaEnfermeriaView, "examenMedico")
router.register(r"pruebas", views.PruebaView, "pruebas")
router.register(r"eventos", views.EventoView, "eventos")


urlpatterns = [path("api/v1/", include(router.urls))]
