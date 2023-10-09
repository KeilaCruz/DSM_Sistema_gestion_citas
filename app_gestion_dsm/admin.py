from django.contrib import admin
from .models import Paciente, Cita, HistoriaNutricion, Rol, Usuario, FichaPsicologicaNiño, FichaPsicologicaAdulto, HojaEvaluacionClinica, ExamenMedico, Evento


# Register your models here.
admin.site.register(Rol)
admin.site.register(Usuario)
admin.site.register(Paciente)
admin.site.register(Cita)
admin.site.register(HistoriaNutricion)
admin.site.register(FichaPsicologicaNiño)
admin.site.register(FichaPsicologicaAdulto)
admin.site.register(HojaEvaluacionClinica)
admin.site.register(ExamenMedico)
admin.site.register(Evento)
