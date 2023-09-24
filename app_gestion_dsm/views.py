from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PacienteSerializer, CitaSerializer,EspecialidadSerializer,HistorialNutricionSerializer
from .models import Paciente, Cita, Especialidad, HistoriaNutricion
# Create your views here.

class PacienteView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()
    
class CitaView(viewsets.ModelViewSet):
    serializer_class = CitaSerializer
    queryset = Cita.objects.all()

class EspecialidadCitaView(viewsets.ModelViewSet):
    serializer_class = EspecialidadSerializer
    queryset = Especialidad.objects.all()
    
class HistoriaNutricionView(viewsets.ModelViewSet):
    serializer_class = HistorialNutricionSerializer
    queryset = HistoriaNutricion.objects.all()
