from django.urls import path, include
from rest_framework import routers
from app_gestion_dsm import views

router = routers.DefaultRouter()
router.register(r"pacientes", views.PacienteView, "pacientes")
router.register(r"citas", views.CitaView, "citas")
router.register(r"historiaNutricion", views.HistoriaNutricionView,"historiaNutricion")
router.register(r"hojaClinica", views.HojaClinicaView, "hojaClinica")
router.register(r"roles", views.RolView, "roles")
router.register(r"usuarios", views.UsuarioView, "usuarios")
router.register(r"notaEnfermeria", views.NotaEnfermeriaView, "notaEnfermeria")
router.register(r"pruebas", views.PruebaView, "pruebas")

urlpatterns = [path("api/v1/", include(router.urls))]
