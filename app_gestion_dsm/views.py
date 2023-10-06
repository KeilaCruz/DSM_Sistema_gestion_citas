from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PacienteSerializer, CitaSerializer,HistoriaNutricionSerializer, HojaClinicaSerializer, RolSerializer, UsuarioSerializer, NotaEnfermeriaSerializer, PruebaSerializer
from .models import Paciente, Cita, HistoriaNutricion,Paciente, Hoja_evaluacion_clinica, Rol, Usuario, Nota_Enfermeria, Prueba
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
    
class PruebaView(viewsets.ModelViewSet):
    serializer_class = PruebaSerializer
    queryset = Prueba.objects.all()