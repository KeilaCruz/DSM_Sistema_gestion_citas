from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PacienteSerializer, HojaClinicaSerializer, RolSerializer, UsuarioSerializer, ExamenMedicoSerializer, EventoSerializer, CitaSerializer, HistoriaNutricionSerializer, FichaPsiAdultoSerializer, FichaPsiNiñoSerializer
from .models import Rol, Usuario, Paciente, Cita, HistoriaNutricion, FichaPsicologicaAdulto, FichaPsicologicaNiño, HojaEvaluacionClinica, ExamenMedico, Evento
# Create your views here.

class PacienteView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()
    
class HojaClinicaView(viewsets.ModelViewSet):
    serializer_class = HojaClinicaSerializer
    queryset = HojaEvaluacionClinica.objects.all()

class RolView(viewsets.ModelViewSet):
    serializer_class = RolSerializer
    queryset = Rol.objects.all()
    
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
    


class ExamenMedicoView(viewsets.ModelViewSet):
    serializer_class = ExamenMedicoSerializer
    queryset = ExamenMedico.objects.all()
        
class EventoView(viewsets.ModelViewSet):
    serializer_class = EventoSerializer
    queryset = Evento.objects.all()
    
class CitaView(viewsets.ModelViewSet):
    serializer_class = CitaSerializer
    queryset = Cita.objects.all()
    
class HistoriaNutricionView(viewsets.ModelViewSet):
    serializer_class = HistoriaNutricionSerializer
    queryset = HistoriaNutricion.objects.all()
    
class FichaPsiAdultoView(viewsets.ModelViewSet):
    serializer_class = FichaPsiAdultoSerializer
    queryset = FichaPsicologicaAdulto.objects.all()
    
class FichaPsiNiñoView(viewsets.ModelViewSet):
    serializer_class = FichaPsiNiñoSerializer
    queryset = FichaPsicologicaNiño.objects.all()