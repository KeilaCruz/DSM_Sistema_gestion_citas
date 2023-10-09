"""
URL configuration for sistema_dsm_API project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("Roles/", include("app_gestion_dsm.urls")),
    path("Usuarios/", include("app_gestion_dsm.urls")),
    path("Pacientes/", include("app_gestion_dsm.urls")),
    path("Citas/", include("app_gestion_dsm.urls")),
    path("HistoriaNutricion/", include("app_gestion_dsm.urls")),
    path("FichaPsiAdulto/", include("app_gestion_dsm.urls")),
    path("FichaPsiNiño/", include("app_gestion_dsm.urls")),
    path("HojaEvaluacionClinica/", include("app_gestion_dsm.urls")),
    path("ExamenMedico/",include("app_gestion_dsm.urls")),
    path("Evento/", include("app_gestion_dsm.urls"))
]
