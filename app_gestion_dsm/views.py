from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PacienteSerializer, HojaClinicaSerializer
from .models import Paciente, Hoja_evaluacion_clinica
# Create your views here.

class PacienteView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()
    
class HojaClinicaView(viewsets.ModelViewSet):
    serializer_class = HojaClinicaSerializer
    queryset = Hoja_evaluacion_clinica.objects.all()
