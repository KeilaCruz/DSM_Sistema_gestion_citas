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
    derecho_habiencia = models.CharField(max_length=9, default="")
    unidad_salud = models.CharField(max_length=150, default="")
    ultima_visita_medico = models.DateField(default="")
    programa_gobierno_federal = models.BooleanField(default=False)
    programa_gobierno_estatal = models.BooleanField(default=False)
    programa_gobierno_municipal = models.BooleanField(default=False)
    numero_personas_vive = models.PositiveIntegerField(default="")
    
    
    def __str__(self):
        return self.CURP
    
class Rol(models.Model):
    nombre_rol = models.CharField(max_length=30, default="")
    descripcion = models.TextField(default="")
    
class Usuario(models.Model):
    email = models.EmailField(max_length=60, default="")
    password = models.CharField(max_length=60, default="")
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)

class Especialista(models.Model):
    nombre = models.CharField(max_length=50, default="")
    ape_paterno = models.CharField(max_length=30, default="")
    ape_materno = models.CharField(max_length=30, default="")
    telefono =models.SmallIntegerField(default="")
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    especialidad = models.ForeignKey(Especialidad, on_delete=models.CASCADE)
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
    especialista = models.CharField(max_length=50, default="")
    nota_medica = models.TextField(default="")
    archivo_medico = models.FileField(upload_to='archivos_medicos/', null=True, blank=True)
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    especialista = models.ForeignKey(Especialista, on_delete=models.CASCADE)
    especialidad = models.ForeignKey(Especialidad, on_delete=models.CASCADE)
    
    
    def __str__(self):
        return 'Hoja de evaluacion clinica de ' + self.paciente.nombre + ' ' + self.paciente.apePaterno + ' ' + self.paciente.apeMaterno
    
   

class Usuario(models.Model):
    email = models.EmailField(max_length=60, default="")
    password = models.CharField(max_length=60, default="")
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)
    

    
        
class Nota_Enfermeria(models.Model):
    
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    
    sexo = models.CharField(max_length=20, default="")
    fecha = models.DateField(default=datetime.date.today)
    
    madre_viva = models.BooleanField(default=False)
    madre_finada = models.CharField(max_length=50, default="")
    padre_vivo = models.BooleanField(default=False)
    padre_finado = models.CharField(max_length=50, default="")
    hermano_vivo = models.BooleanField(default=False)
    hermano_finado = models.CharField(max_length=50, default="")
    hijos_vivos = models.BooleanField(default=False)
    hijos_finados = models.CharField(max_length=50, default="")
    
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
    ultima_menstruacion = models.DateField(default=datetime.date.today, null=True, blank=True)
    num_embarazos = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    num_partos = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    num_cesareas = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    num_abortos = models.PositiveSmallIntegerField(default="", null=True, blank=True)
    ultimo_parto = models.DateField(default=datetime.date.today, null=True, blank=True)
    ultimo_aborto = models.DateField(default=datetime.date.today, null=True, blank=True)
    planificacion_familiar = models.BooleanField(default=False, null=True, blank=True)
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