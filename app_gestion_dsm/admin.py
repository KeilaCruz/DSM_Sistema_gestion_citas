from django.contrib import admin
from .models import Paciente,Cita, HistoriaNutricion
from .models import Paciente, Hoja_evaluacion_clinica

# Register your models here.
admin.site.register(Paciente)
admin.site.register(Cita)
admin.site.register(HistoriaNutricion)
admin.site.register(Hoja_evaluacion_clinica)
# Register your models here.
