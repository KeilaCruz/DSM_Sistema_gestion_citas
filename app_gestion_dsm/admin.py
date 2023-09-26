from django.contrib import admin
from .models import Paciente,Cita, Especialidad

# Register your models here.
admin.site.register(Paciente)
admin.site.register(Cita)
admin.site.register(Especialidad)
