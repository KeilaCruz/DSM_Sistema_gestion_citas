from django.db import models


# Create your models here.
class Paciente(models.Model):
    nombre = models.CharField(max_length=45, default="")
    apePaterno = models.CharField(max_length=45, default="")
    apeMaterno = models.CharField(max_length=45, default="")
    edad = models.PositiveIntegerField(default="")
    estado_civil = models.CharField(max_length=15, default="")
    CURP = models.CharField(max_length=18, default="")
    escolaridad = models.CharField(max_length=20, default="")
    colonia = models.CharField(max_length=45, default="")
    calle = models.CharField(max_length=45, default="")
    numero_exterior = models.PositiveIntegerField(default="")
    referencia = models.TextField(default="")
    CP = models.PositiveIntegerField(default="")
    derecho_habiencia = models.CharField(max_length=9, default="")
    unidad_salud = models.CharField(max_length=150, default="")
    ultima_visita_medico = models.DateField(default="")
    programa_gobierno_federal = models.BooleanField(default=False)
    programa_gobierno_estatal = models.BooleanField(default=False)
    programa_gobierno_municipal = models.BooleanField(default=False)
    numero_personas_vive = models.PositiveIntegerField(default="")

    def __str__(self):
        return self.CURP


class Cita(models.Model):
    idPaciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    fecha_cita = models.DateField(default="")
    hora_cita = models.TimeField(default="")
    # idEspecialidad = models.ForeignKey(Especialidad,default="")
    estado = models.BooleanField(default=False)

    def __str__(self):
        return self.estado


class Especialidad(models.Model):
    nombre_especialidad = models.CharField(max_length=25, default="")

    def __str__(self):
        return self.nombre_especialidad

class HistoriaNutricion(models.Model):
     motivo_consulta = models.TextField(default="")
     AHF_diabetes = models.BooleanField(default=False)
     quien_diabetes = models.CharField(max_length=20,default="")
     AHF_hipertension = models.BooleanField(default="")
     quien_hipertension = models.CharField(max_length=20,default="")
     AHF_dislipidemias = models.BooleanField(default=False)
     quien_dislipidemias = models.CharField(max_length=20,default="")
     AP_diabetes_mellitus = models.BooleanField(default=False)
     AP_hipertension = models.BooleanField(default=False)
     AP_dislipidemias = models.BooleanField(default=False)
     problemas_gastroinstestinales = models.BooleanField(default=False)
     cual_problema_gastrointestinal = models.CharField(max_length=30,default="")
     observaciones_patologicas = models.TextField(default="")
     intervencion_quirurgica = models.BooleanField(default=False)
     cual_intervencion_quirurgica = models.CharField(max_length=30,default="")
     alergia_alimento = models.BooleanField(default=False)
     cual_alergia_alimento = models.CharField(max_length=40, default="")
     alergia_farmaco  = models.BooleanField(default=False)
     cual_alergia_farmaco = models.CharField(max_length=40,default="")
     desde_cuando_farmaco = models.DateField(default="")
     realiza_actividad_fisica = models.BooleanField(default=False)
     cual_actividad_fisica = models.CharField(max_length=30,default="")
     duracion = models.TimeField(default="")
     consume_alcohol = models.BooleanField(default=False)
     consume_tabaco = models.BooleanField(default=False)
     consume_droga = models.BooleanField(default=False)
     frecuencia_cereales = models.CharField(max_length=5,default="")
     frecuencia_frutas = models.CharField(max_length=5,default="")
     frecuencia_verduras = models.CharField(max_length=5,default="")
     frecuencia_carne_roja = models.CharField(max_length=5,default="")
     frecuencia_pollo = models.CharField(max_length=5,default="")
     frecuencia_lacteos = models.CharField(max_length=5,default="")
     frecuencia_leguminosas = models.CharField(max_length=5,default="")
     frecuencia_azucar = models.CharField(max_length=5,default="")
     frecuencia_grasas = models.CharField(max_length=5,default="")
     frecuencia_pescado = models.CharField(max_length=5,default="")
     cuantas_veces_come = models.PositiveIntegerField(default="")    
     quien_prepara_alimentos = models.CharField(max_length=30, default="")
     litro_consume_agua = models.DecimalField(max_digits=3,decimal_places=2,default="")
     litro_consume_refresco = models.DecimalField(max_digits=4,decimal_places=2,default="")
     litro_consume_cafe = models.DecimalField(max_digits=4,decimal_places=2,default="")
     alimentos_causan_malestar = models.TextField(default="")
     tipo_grasa_preparar_alimentos = models.CharField(max_length=18,default="")
     
     