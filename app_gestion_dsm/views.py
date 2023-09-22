from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PacienteSerializer
from .models import Paciente
# Create your views here.

class PacienteView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()
