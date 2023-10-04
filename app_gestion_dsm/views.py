from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PacienteSerializer, CitaSerializer,HistoriaNutricionSerializer
from .models import Paciente, Cita, HistoriaNutricion
# Create your views here.

class PacienteView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()
    
class CitaView(viewsets.ModelViewSet):
    serializer_class = CitaSerializer
    queryset = Cita.objects.all()

class HistoriaNutricionView(viewsets.ModelViewSet):
    serializer_class = HistoriaNutricionSerializer
    queryset = HistoriaNutricion.objects.all()
    
