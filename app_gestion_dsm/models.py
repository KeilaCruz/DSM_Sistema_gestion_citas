import datetime
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
    problema_gastrointestinales = models.BooleanField(default=False)
    cual_problema_gastrointestinal = models.CharField(max_length=100,default="")
    observaciones_patologicas = models.TextField(default="")
    intervencion_quirurgica = models.BooleanField(default="")
    cual_intervencion_quirurgica = models.CharField(max_length=70,default="")
    alergia_alimento = models.BooleanField(default=False)
    cual_alergia_alimento = models.CharField(max_length=50,default="")
    consume_farmaco_alergia = models.BooleanField(default=False)
    cual_alergia_farmaco = models.CharField(max_length=50,default=False)
    desde_cuando_farmaco = models.CharField(max_length=40,default="")
    realiza_actividad_fisica = models.BooleanField(default=False)
    cual_actividad_fisica = models.CharField(max_length=50,default="")
    duracion = models.CharField(max_length=10,default="")
    consume_alcohol = models.BooleanField(default=False)
    consume_tabaco = models.BooleanField(default=False)
    consume_droga = models.BooleanField(default=False)
    numero_gestas = models.PositiveIntegerField(default="",null=True)
    numero_partos_cesarea = models.PositiveIntegerField(default="",null=True)
    numero_abortos = models.PositiveIntegerField(default="",null=True)
    actualmente_lactando = models.BooleanField(default=False,null=True)
    fecha_ultima_menstruacion = models.DateField(default=None,null=True)
    presenta_menoupasia = models.BooleanField(default=False)
    frecuencia_cereales = models.CharField(max_length=5,default="")
    frecuencia_frutas = models.CharField(max_length=5,default="")
    frecuencia_verduras = models.CharField(max_length=5,default="")
    frecuencia_carne_roja = models.CharField(max_length=5,default="")
    frecuencia_pollo = models.CharField(max_length=5,default="")
    frecuencia_lacteos = models.CharField(max_length=5,default="")
    frecuencia_leguminosas = models.CharField(max_length=5, default="")
    frecuencia_azucar = models.CharField(max_length=5,default="")
    frecuencia_grasas = models.CharField(max_length=5,default="")
    frecuencia_pescado = models.CharField(max_length=5,default="")
    cuantas_veces_come = models.PositiveIntegerField(default="")
    quien_prepara_alimentos = models.CharField(max_length=30,default="")
    litro_consume_agua = models.DecimalField(max_digits=3, decimal_places=2,default="")
    litro_consume_refresco = models.DecimalField(max_digits=3, decimal_places=2,default="")
    litro_consume_cafe = models.DecimalField(max_digits=3, decimal_places=2,default="")
    alimentos_causan_malestar = models.TextField(default="")
    tipo_grasa_preparar_alimentos = models.CharField(max_length=30,default="")
    diagnostico_nutricio = models.TextField(default="")
    tratamiento_nutricional = models.TextField(default="")
    
    def __str__(self):
        return self.motivo_consulta
    
class Rol(models.Model):
    nombre_rol = models.CharField(max_length=30, default="")
    descripcion = models.TextField(default="")
    def __str__(self):
        return self.nombre_rol
    
class Usuario(models.Model):
    email = models.EmailField(max_length=60, default="")
    password = models.CharField(max_length=60, default="")
    nombre = models.CharField(max_length=50, default="")
    ape_paterno = models.CharField(max_length=30, default="")
    ape_materno = models.CharField(max_length=30, default="")
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)
    def __str__(self):
        return self.email

    
class Hoja_evaluacion_clinica(models.Model):
    fecha_revision = models.DateField(default=datetime.date.today)
    tension_arterial = models.PositiveSmallIntegerField(default="")
    frecuencia_cardiaca = models.PositiveSmallIntegerField(default="")
    frecuencia_respiratoria = models.PositiveSmallIntegerField(default="")
    temperatura = models.DecimalField(max_digits=5, decimal_places=2, default="")
    imc = models.DecimalField(max_digits=5, decimal_places=2, default="")
    saturacion_oxigeno = models.PositiveSmallIntegerField(default="")
    glucosa = models.DecimalField(max_digits=5, decimal_places=2, default="")
    peso = models.DecimalField(max_digits=5, decimal_places=2, default="")
    talla = models.DecimalField(max_digits=5, decimal_places=2, default="")
    cintura = models.DecimalField(max_digits=5, decimal_places=2, default="")
    nota_medica = models.TextField(default="")
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)
    """ archivo_medico = models.FileField(upload_to='archivos_medicos/', null=True, blank=True)    """
    def __str__(self):
        return self.fecha_revision
    
    
class Prueba(models.Model):
    checkbox = models.BooleanField(default=False)
    checkbox2 = models.BooleanField(default=False, null=True, blank=True)
    texto = models.CharField(max_length=50, default="")
    texto2 = models.CharField(max_length=50, default="", null=True, blank=True)
    numero=  models.PositiveIntegerField(default=0)
    numero2=  models.PositiveIntegerField(default=0)
    
class Nota_Enfermeria(models.Model):
    
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)
    
    sexo = models.CharField(max_length=20, default="")
    fecha = models.DateField(default=datetime.date.today)
    
    madre_viva = models.BooleanField(default=False)
    madre_finada = models.CharField(max_length=50, default="", null=True, blank=True)
    padre_vivo = models.BooleanField(default=False)
    padre_finado = models.CharField(max_length=50, default="", null=True, blank=True)
    hermano_vivo = models.BooleanField(default=False)
    hermano_finado = models.CharField(max_length=50, default="", null=True, blank=True)
    hijos_vivos = models.BooleanField(default=False)
    hijos_finados = models.CharField(max_length=50, default="", null=True, blank=True)
    
    agudeza_visual = models.CharField(max_length=50, default="")
    hiper_tension=models.CharField(max_length=50, default="")
    diabetes_mellitus = models.CharField(max_length=50, default="")
    obesidad = models.CharField(max_length=50, default="")
    asma = models.CharField(max_length=50, default="")
    epilepsia = models.CharField(max_length=50, default="")
    lupus = models.CharField(max_length=50, default="")
    nefropatias = models.CharField(max_length=50, default="")
    artropatias = models.CharField(max_length=50, default="")
    otras_enfermedades = models.CharField(max_length=50, default="")
    observaciones_enfermedades = models.TextField(default="")
    
    lugar_nacimiento = models.CharField(max_length=50, default="")
    fecha_nacimiento = models.DateField(default=datetime.date.today)
    escolaridad = models.CharField(max_length=50, default="")
    trabajo_actual = models.CharField(max_length=50, default="")
    practica_ejercicio = models.BooleanField(default=False)
    ejercicio_cual = models.CharField(max_length=50, default="", null=True, blank=True)
    tabaquismo = models.BooleanField(default=False)
    tabaquismo_edad=models.PositiveSmallIntegerField(default="", null=True, blank=True)
    tabaquismo_cantidad = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    alcoholismo = models.BooleanField(default=False)
    alcoholismo_edad = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    inmunizaciones=models.CharField(max_length=60, default="",null=True, blank=True)
    habitos_higienicos = models.CharField(max_length=100, default="",null=True, blank=True)
    habitos_alimenticios = models.CharField(max_length=100, default="",null=True, blank=True)
    especifique_habitos = models.CharField(max_length=100, default="",null=True, blank=True)
    
    edad_menarca = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    frecuencia_duracion =models.PositiveSmallIntegerField(default="", null=True, blank=True)
    ultima_menstruacion = models.CharField(max_length=50, default="", null=True, blank=True)
    num_embarazos = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    num_partos = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    num_cesareas = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    num_abortos = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    ultimo_parto = models.CharField(max_length=50, default="", null=True, blank=True)
    ultimo_aborto = models.CharField(max_length=50, default="", null=True, blank=True)
    planificacion_familiar = models.BooleanField(default=False)
    metodo_planificacion = models.CharField(max_length=50, default="", null=True, blank=True)
    
    traumatismos = models.CharField(max_length=70, default="")
    quirurgicos = models.CharField(max_length=70, default="")
    transfusiones = models.CharField(max_length=70, default="")
    grupo_sanguineo = models.CharField(max_length=20, default="")
    factor_rh = models.CharField(max_length=20, default="",null=True, blank=True)
    alergias = models.CharField(max_length=150, default="")
    infecciones = models.CharField(max_length=150, default="")
    dengue_paludismo = models.CharField(max_length=50, default="")
    tatuajes = models.CharField(max_length=70, default="")
    
    tension_arterial = models.PositiveSmallIntegerField(default="")
    frecuencia_cardiaca = models.PositiveSmallIntegerField(default="")
    talla = models.DecimalField(max_digits=5, decimal_places=2, default="")
    imc = models.DecimalField(max_digits=5, decimal_places=2, default="")
    circunferencia_abd = models.DecimalField(max_digits=5, decimal_places=2, default="")
    circunferencia_cadera = models.DecimalField(max_digits=5, decimal_places=2, default="")
    observaciones_antropometria = models.TextField(default="")
    
    EF_cabeza = models.CharField(max_length=100, default="")
    EF_cuello = models.CharField(max_length=100, default="")
    EF_torax = models.CharField(max_length=100, default="")
    EF_abdomen = models.CharField(max_length=100, default="")
    EF_EXT_sup = models.CharField(max_length=100, default="")
    EF_EXT_inf = models.CharField(max_length=100, default="")
    EF_EXT_rodillas = models.CharField(max_length=100, default="")
    EF_EXT_pelvis = models.CharField(max_length=100, default="")
    EF_EXT_pies = models.CharField(max_length=100, default="")
    
    biometria_hematica = models.CharField(max_length=50, default="")
    quimica_sanguinea = models.CharField(max_length=50, default="")
    vdrl = models.CharField(max_length=50, default="")
    prueba_vih=models.CharField(max_length=50, default="")
    antidoping = models.CharField(max_length=50, default="")
    examen_orina = models.CharField(max_length=50, default="")
    diagnostico = models.TextField(default="")
    
    def __str__(self):
        return self.fecha