from django.contrib import admin
from .models import Paciente,Cita, Especialidad, HistoriaNutricion

# Register your models here.
admin.site.register(Paciente)
admin.site.register(Cita)
admin.site.register(Especialidad)
admin.site.register(HistoriaNutricion)