from rest_framework import serializers
from .models import Paciente, Hoja_evaluacion_clinica


class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = "__all__"
        
class HojaClinicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hoja_evaluacion_clinica
        fields = "__all__"
