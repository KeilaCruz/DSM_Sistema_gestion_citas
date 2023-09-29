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
    telefono = models.CharField(max_length=10,default="")
    derecho_habiencia = models.CharField(max_length=9, default="")
    unidad_salud = models.CharField(max_length=150, default="")
    ultima_visita_medico = models.DateField(null=True,default=None)
    #programa_gobierno_federal = models.BooleanField(default=False)
    #programa_gobierno_estatal = models.BooleanField(default=False)
    #programa_gobierno_municipal = models.BooleanField(default=False)
    numero_personas_vive = models.PositiveIntegerField(default="")

    def __str__(self):
        return self.CURP


class Cita(models.Model):
    idPaciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    fecha_cita = models.DateField(null=True,default=None)
    hora_cita = models.TimeField(default="")
    especialidad = models.CharField(max_length=12,default="")
    #estado = models.BooleanField(default=False)
    #idUsuario
    def __str__(self):
        return self.idPaciente


class Especialidad(models.Model):
    nombre_especialidad = models.CharField(max_length=25, default="")

    def __str__(self):
        return self.nombre_especialidad
