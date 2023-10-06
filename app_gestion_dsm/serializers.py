from rest_framework import serializers
from .models import Paciente,  Cita, HistoriaNutricion, Hoja_evaluacion_clinica, Rol, Usuario, Nota_Enfermeria, Prueba


class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = "__all__"


class CitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cita
        fields = "__all__"

class HistoriaNutricionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoriaNutricion
        fields = "__all__"

class HojaClinicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hoja_evaluacion_clinica
        fields = "__all__"

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = "__all__"
        
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = "__all__"
        
  
class NotaEnfermeriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nota_Enfermeria
        fields = "__all__"
        
class PruebaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prueba
        fields = "__all__"
