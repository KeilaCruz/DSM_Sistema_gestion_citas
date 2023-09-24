from rest_framework import serializers
from .models import Paciente, Cita, Especialidad, HistoriaNutricion


class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = "__all__"


class CitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cita
        fields = "__all__"

class EspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialidad
        fields = "__all__"

class HistorialNutricionSerializer(serializers.ModelSerializer):
    class Meta: 
        model = HistoriaNutricion
        fields = "__all__"
        