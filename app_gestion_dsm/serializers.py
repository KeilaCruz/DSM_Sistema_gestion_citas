from rest_framework import serializers
from .models import Rol, Usuario, Paciente, Cita, HistoriaNutricion, FichaPsicologicaAdulto, FichaPsicologicaNiño, HojaEvaluacionClinica, ExamenMedico, Evento



class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = "__all__"


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = "__all__"


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

class FichaPsicoAdultoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FichaPsicologicaAdulto
        fields = "__all__"

class FichaPsicoNiñoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FichaPsicologicaNiño
        fields = "__all__"

class HojaClinicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = HojaEvaluacionClinica
        fields = "__all__"


class ExamenMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamenMedico
        fields = "__all__"


class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = "__all__"
