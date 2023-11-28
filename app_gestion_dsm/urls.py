from django.urls import path, include
from rest_framework import routers
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from app_gestion_dsm import views

router = routers.DefaultRouter()

router.register(r"roles", views.RolView, "roles")
router.register(r"usuarios", views.UsuarioView, "usuarios")
router.register(r"pacientes", views.PacienteView, "pacientes")
router.register(r"citas", views.CitaView, "citas")
router.register(r"historiaNutricion", views.HistoriaNutricionView, "historiaNutricion")
router.register(r"hojaClinica", views.HojaClinicaView, "hojaClinica")
router.register(r"fichaPsicoAdulto", views.FichaPsiAdultoView, "fichaPsicoAdulto")
router.register(r"fichaPsicoNiño", views.FichaPsiNiñoView, "fichaPsiNiño")
router.register(r"examenMedico", views.ExamenMedicoView, "examenMedico")
router.register(r"eventos", views.EventoView, "eventos")


"""for route in router.registry:
    if route[0] != "usuarios":
        route[1].permission_classes = [IsAuthenticated]"""

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
