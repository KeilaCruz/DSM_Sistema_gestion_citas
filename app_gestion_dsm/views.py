from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PacienteSerializer, HojaClinicaSerializer, RolSerializer, UsuarioSerializer, NotaEnfermeriaSerializer
from .models import Paciente, Hoja_evaluacion_clinica, Rol, Usuario, Nota_Enfermeria
# Create your views here.

class PacienteView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()
    
class HojaClinicaView(viewsets.ModelViewSet):
    serializer_class = HojaClinicaSerializer
    queryset = Hoja_evaluacion_clinica.objects.all()

class RolView(viewsets.ModelViewSet):
    serializer_class = RolSerializer
    queryset = Rol.objects.all()
    
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
    


class NotaEnfermeriaView(viewsets.ModelViewSet):
    serializer_class = NotaEnfermeriaSerializer
    queryset = Nota_Enfermeria.objects.all()