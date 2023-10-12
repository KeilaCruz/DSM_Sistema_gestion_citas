import datetime
from django.db import models


class Rol(models.Model):
    idRol = models.BigAutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=30, default="")
    descripcion = models.TextField(default="")

    def __str__(self):
        return self.nombre_rol


class Usuario(models.Model):
    idUsuario = models.BigAutoField(primary_key=True)
    email = models.EmailField(max_length=60, default="")
    password = models.CharField(max_length=60, default="")
    nombre = models.CharField(max_length=50, default="")
    ape_paterno = models.CharField(max_length=30, default="")
    ape_materno = models.CharField(max_length=30, default="")
    idRol = models.ForeignKey(Rol, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre + " " + self.ape_paterno + " " + self.ape_materno + " --- " + self.idRol.nombre_rol


# Create your models here.
class Paciente(models.Model):
    nombre = models.CharField(max_length=45, default="")
    apePaterno = models.CharField(max_length=45, default="")
    apeMaterno = models.CharField(max_length=45, default="")
    edad = models.PositiveIntegerField(default="")
    estado_civil = models.CharField(max_length=15, default="")
    CURP = models.CharField(max_length=18, default="", primary_key=True)
    escolaridad = models.CharField(max_length=20, default="")
    colonia = models.CharField(max_length=45, default="")
    calle = models.CharField(max_length=45, default="")
    numero_exterior = models.PositiveIntegerField(default="")
    referencia = models.TextField(default="")
    CP = models.PositiveIntegerField(default="")
    telefono = models.CharField(max_length=10, default="")
    derecho_habiencia = models.CharField(max_length=9, default="")
    unidad_salud = models.CharField(max_length=150, default="")
    ultima_visita_medico = models.DateField(null=True, default=None)
    programa_gobierno_federal = models.BooleanField(default=False)
    cual_programa_federal = models.CharField(max_length=70, default="")
    programa_gobierno_estatal = models.BooleanField(default=False)
    cual_programa_estatal = models.CharField(max_length=70, default="")
    programa_gobierno_municipal = models.BooleanField(default=False)
    cual_programa_municipal = models.CharField(max_length=70, default="")
    numero_personas_vive = models.PositiveIntegerField(default="")

    def __str__(self):
        return self.nombre + " " + self.apePaterno + " " + self.apeMaterno + " -- " + self.CURP


class Cita(models.Model):
    idCita = models.BigAutoField(primary_key=True)
    idPaciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    fecha_cita = models.DateField()
    hora_cita = models.TimeField(default="")
    especialidad = models.CharField(max_length=15, default="")
    estado = models.BooleanField(default=False)

    def __str__(self):
        return "Cita: "+ self.idCita.__str__() + " --- " +  self.idPaciente.CURP +  " --- " + self.fecha_cita.strftime("%d/%m/%Y") 

class HistoriaNutricion(models.Model):
    idHistoriaNutricion = models.BigAutoField(primary_key=True)
    motivo_consulta = models.TextField(default="")
    AHF_diabetes = models.BooleanField(default=False)
    quien_diabetes = models.CharField(max_length=20, default="")
    AHF_hipertension = models.BooleanField(default="")
    quien_hipertension = models.CharField(max_length=20, default="")
    AHF_dislipidemias = models.BooleanField(default=False)
    quien_dislipidemias = models.CharField(max_length=20, default="")
    AP_diabetes_mellitus = models.BooleanField(default=False)
    AP_hipertension = models.BooleanField(default=False)
    AP_dislipidemias = models.BooleanField(default=False)
    problema_gastrointestinales = models.BooleanField(default=False)
    cual_problema_gastrointestinal = models.CharField(max_length=100, default="")
    observaciones_patologicas = models.TextField(default="")
    intervencion_quirurgica = models.BooleanField(default="")
    cual_intervencion_quirurgica = models.CharField(max_length=70, default="")
    alergia_alimento = models.BooleanField(default=False)
    cual_alergia_alimento = models.CharField(max_length=50, default="")
    consume_farmaco_alergia = models.BooleanField(default=False)
    cual_alergia_farmaco = models.CharField(max_length=50, default=False)
    desde_cuando_farmaco = models.CharField(max_length=40, default="")
    realiza_actividad_fisica = models.BooleanField(default=False)
    cual_actividad_fisica = models.CharField(max_length=50, default="")
    frecuencia = models.CharField(max_length=20, default="")
    duracion = models.CharField(max_length=10, default="")
    consume_alcohol = models.BooleanField(default=False)
    consume_tabaco = models.BooleanField(default=False)
    consume_droga = models.BooleanField(default=False)
    numero_gestas = models.PositiveIntegerField(default="", null=True)
    numero_partos_cesarea = models.PositiveIntegerField(default="", null=True)
    numero_abortos = models.PositiveIntegerField(default="", null=True)
    actualmente_lactando = models.BooleanField(default=False, null=True)
    fecha_ultima_menstruacion = models.DateField()
    presenta_menoupasia = models.BooleanField(default=False)
    frecuencia_cereales = models.CharField(max_length=5, default="")
    frecuencia_frutas = models.CharField(max_length=5, default="")
    frecuencia_verduras = models.CharField(max_length=5, default="")
    frecuencia_carne_roja = models.CharField(max_length=5, default="")
    frecuencia_pollo = models.CharField(max_length=5, default="")
    frecuencia_lacteos = models.CharField(max_length=5, default="")
    frecuencia_leguminosas = models.CharField(max_length=5, default="")
    frecuencia_azucar = models.CharField(max_length=5, default="")
    frecuencia_grasas = models.CharField(max_length=5, default="")
    frecuencia_pescado = models.CharField(max_length=5, default="")
    cuantas_veces_come = models.PositiveIntegerField(default="")
    quien_prepara_alimentos = models.CharField(max_length=30, default="")
    litro_consume_agua = models.DecimalField(max_digits=5, decimal_places=2, default="")
    litro_consume_refresco = models.DecimalField(
        max_digits=5, decimal_places=2, default=""
    )
    litro_consume_cafe = models.DecimalField(max_digits=5, decimal_places=2, default="")
    alimentos_causan_malestar = models.TextField(default="")
    tipo_grasa_preparar_alimentos = models.CharField(max_length=30, default="")
    r24_desayuno = models.TextField(default="")
    r24_colacion_uno = models.TextField(default="")
    r24_comida = models.TextField(default="")
    r24_colacion_dos = models.TextField(default="")
    r24_cena = models.TextField(default="")
    diagnostico_nutricio = models.TextField(default="")
    tratamiento_nutricional = models.TextField(default="")
    idUsuario = models.ForeignKey(Usuario, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.idHistoriaNutricion.__str__() + " --- " + self.idUsuario.nombre + " " + self.idUsuario.ape_paterno + " " + self.idUsuario.ape_materno


class FichaPsicologicaAdulto(models.Model):
    expedienteFicha = models.CharField(max_length=20,primary_key=True)
    idPaciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    idUsuario = models.ForeignKey(Usuario, on_delete=models.DO_NOTHING)
    fecha_registro = models.DateField()
    fecha_nacimiento = models.DateField()
    lugar_nacimiento = models.CharField(max_length=50, default="")
    numero_hijos = models.PositiveIntegerField(default="", null=True)
    edad_hijos = models.CharField(max_length=50, default="", null=True)
    ocupacion_hijos = models.TextField(default="", null=True)
    religion = models.CharField(max_length=30, default="")
    ocupacion = models.CharField(max_length=30, default="")
    nivel_socioeconomico = models.CharField(max_length=15, default="")
    motivo_consulta = models.TextField(default="")
    referido = models.CharField(max_length=30, default="")
    recibido_orientacion_psicologica = models.BooleanField(default=False)
    motivos_orientacion = models.TextField(default="", null=True)
    tiempo_orientacion = models.CharField(max_length=30, default="", null=True)
    historia_actual_paciente = models.TextField(default="")
    historia_desarrollo = models.TextField(default="")
    primeros_cuatro_años = models.TextField(default="")
    historia_escolar_kinder = models.TextField(default="")
    historia_escolar_primaria = models.TextField(default="")
    historia_escolar_secundaria = models.TextField(default="")
    historia_escolar_preparatoria = models.TextField(default="")
    historia_escolar_profesiona = models.TextField(default="")
    historia_laboral = models.TextField(default="", null=True)
    gusta_trabajo = models.CharField(max_length=100, default="")
    no_gusta_trabajo = models.CharField(max_length=100, default="")
    percibe_padres = models.CharField(max_length=100, default="")
    contado_padres = models.CharField(max_length=100, default="", null=True)
    percibe_vive_casa = models.CharField(max_length=100, default="")
    percibe_hijos = models.CharField(max_length=100, default="", null=True)
    otros_familiares_significativos = models.CharField(
        max_length=100, default="", null=True
    )
    tiene_mascotas = models.BooleanField(default=False)
    padecimientos_heredofamiliares = models.CharField(
        max_length=100, default="", null=True
    )
    enfermedades_padecido = models.CharField(max_length=100, default="", null=True)
    padece_sintomas_transtornos_psicomaticos = models.BooleanField(default=False)
    cuales_psicomaticos = models.CharField(max_length=100, default="", null=True)
    padece_enfermedad_cronica = models.BooleanField(default=False)
    cual_cronica = models.CharField(max_length=100, default="", null=True)
    bajo_tratamiento = models.BooleanField(default=False)
    cual_tratamiento = models.CharField(max_length=100, default="", null=True)
    intervenido_quirurgicamente = models.BooleanField(default=False)
    causa_intervencion = models.CharField(max_length=70, default="", null=True)
    tiene_adicciones = models.BooleanField(default=False)
    cual_adiccion = models.CharField(max_length=70, default="", null=True)
    otros_datos = models.TextField(default="")
    recibido_atencion_medica_adecuada = models.BooleanField(default=False)
    especificar = models.TextField(default="")
    cuando_diferencia_genero = models.CharField(max_length=70, default="")
    como_diferencia_genero = models.CharField(max_length=70, default="")
    genero_asignaron_niño = models.CharField(max_length=50, default="")
    experiencia_abuso_sexual = models.BooleanField(default=False)
    edad_abuso_sexual = models.PositiveIntegerField(default="", null=True)
    por_quien_abuso_sexual = models.CharField(max_length=40, default="", null=True)
    sexualmente_activo = models.BooleanField(default=False)
    edad_primera_relacion_sexual = models.PositiveIntegerField(default="")
    con_quien_primera = models.CharField(max_length=40, default="")
    como_hansido_experiencia_sexual = models.CharField(max_length=60, default="")
    utiliza_metodo_conceptivo = models.BooleanField(default=False)
    cual_metodo_conceptivo = models.CharField(max_length=60, default="")
    tenido_relaciones_distintas_heterosexuales = models.CharField(
        max_length=100, default=""
    )
    edad_menarca = models.PositiveIntegerField(default="", null=True)
    informacion_tenia_menarca = models.CharField(max_length=60, default="", null=True)
    quien_dio_info_menarca = models.CharField(max_length=40, default="", null=True)
    como_recibio_info_menarca = models.CharField(max_length=60, default="", null=True)
    edad_primeras_eyaculaciones_nocturnas = models.PositiveIntegerField(default="")
    informacion_tenia_eyaculacion = models.CharField(
        max_length=50, default="", null=True
    )
    quien_dio_info = models.CharField(max_length=50, default="", null=True)
    como_recibio_info_eyaculacion = models.CharField(
        max_length=60, default="", null=True
    )

    def __str__(self):
        return self.idPaciente.nombre + " " + self.idPaciente.apePaterno + " " + self.idPaciente.apeMaterno + " --- " + self.expedienteFicha


class FichaPsicologicaNiño(models.Model):
    expedienteFicha = models.CharField(max_length=20,primary_key=True)
    idPaciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    idUsuario = models.ForeignKey(Usuario, on_delete=models.DO_NOTHING)
    fecha_registro = models.DateField()
    años = models.PositiveIntegerField(default="")
    meses = models.PositiveIntegerField(default="")
    fecha_nacimiento = models.DateField(default="")
    lugar_nacimiento = models.CharField(max_length=50, default="")
    grado_escolar = models.PositiveIntegerField(default="")
    nombre_escuela = models.CharField(max_length=60, default="")
    ubicacion_escuela = models.CharField(max_length=60, default="")
    lugar_ocupa_familia = models.CharField(max_length=40, default="")
    informacion_hermanos = models.TextField(default="")
    nombre_padre = models.CharField(max_length=40, default="")
    edad_padre = models.PositiveIntegerField(default="")
    escolaridad_padre = models.CharField(max_length=30, default="")
    ocupacion_padre = models.CharField(max_length=30, default="")
    nombre_madre = models.CharField(max_length=40, default="")
    edad_madre = models.PositiveIntegerField(default="")
    escolaridad_madre = models.CharField(max_length=30, default="")
    ocupacion_madre = models.CharField(max_length=30, default="")
    estado_civil_padres = models.CharField(max_length=40, default="")
    años_estado_civil = models.PositiveIntegerField(default="")
    nombre_tutor = models.CharField(max_length=40, default="", null=True)
    edad_tutor = models.PositiveIntegerField(default="", null=True)
    ocupacion_tutor = models.CharField(max_length=30, default="", null=True)
    motivos_niño_cargo_tutor = models.CharField(max_length=80, default="", null=True)
    desde_cuando_tutor = models.CharField(max_length=10, default="", null=True)
    descripcion_viven_con_niño = models.TextField(default="")
    motivo_consulta = models.TextField(default="")
    canalizado_por = models.CharField(max_length=40, default="")
    consulta_otro_profesional = models.CharField(max_length=40, default="", null=True)
    diagnostico_otorgado = models.TextField(default="")
    toma_medicamento = models.BooleanField(default=False)
    motivo = models.CharField(max_length=50, default="", null=True)
    nombre_medicamento = models.CharField(max_length=40, default="", null=True)
    dosis_medicamento = models.CharField(max_length=10, default="", null=True)
    realizado_estudio = models.CharField(max_length=40, default="", null=True)
    numero_embarazos_madre = models.PositiveIntegerField(default="")
    tiempo_gestacion = models.PositiveIntegerField(default="")
    problemas_durante_embarazo = models.TextField(default="", null=True)
    medicamentos_embarazo = models.BooleanField(default=False)
    motivo_medicamento_embarazo = models.CharField(max_length=60, default="", null=True)
    nombre_medicamento_embarazo = models.CharField(max_length=40, default="", null=True)
    dosis_medicamento_embarazo = models.CharField(max_length=40, default="", null=True)
    tipo_parto = models.CharField(max_length=10, default="")
    duracion_parto = models.CharField(max_length=10, default="")
    complicaciones_parto = models.CharField(max_length=50, default="", null=True)
    peso_nacer = models.DecimalField(max_digits=5, decimal_places=2, default="")
    talla_nacer = models.DecimalField(max_digits=5, decimal_places=2, default="")
    alimentacion_seno_materno = models.BooleanField(default=False)
    tiempo_alimentacion_seno = models.CharField(max_length=10, default="", null=True)
    edad_sosten_cefalico = models.PositiveIntegerField(default="")
    edad_balbuceo = models.PositiveIntegerField(default="")
    edad_sentarse = models.PositiveIntegerField(default="")
    edad_ponerse_pie = models.PositiveIntegerField(default="")
    edad_camino = models.PositiveIntegerField(default="")
    controla_esfinter = models.BooleanField(default=False)
    edad_control_esfinter = models.PositiveIntegerField(default="")
    enfermedades_primer_año_vida = models.TextField(default="")
    enfermedades_posteriores = models.TextField(default="")
    antecedentes_padecimiento_actual = models.CharField(max_length=100, default="")
    salud_fisica_actual = models.TextField(default="")
    edad_ingreso_escolar = models.PositiveIntegerField(default="")
    nivel_ingreso = models.CharField(max_length=10, default="")
    conducta_ingreso = models.CharField(max_length=50, default="")

    def __str__(self):
        return self.idPaciente.nombre + " " + self.idPaciente.apePaterno + " " + self.idPaciente.apeMaterno + " --- " + self.expedienteFicha


class HojaEvaluacionClinica(models.Model):
    idHojaClinica = models.BigAutoField(primary_key=True)
    fecha_revision = models.DateField(default=datetime.date.today)
    tension_arterial = models.PositiveIntegerField(default="")
    frecuencia_cardiaca = models.PositiveIntegerField(default="")
    frecuencia_respiratoria = models.PositiveIntegerField(default="")
    temperatura = models.DecimalField(max_digits=5, decimal_places=2, default="")
    imc = models.DecimalField(max_digits=5, decimal_places=2, default="")
    saturacion_oxigeno = models.PositiveIntegerField(default="")
    glucosa = models.DecimalField(max_digits=5, decimal_places=2, default="")
    peso = models.DecimalField(max_digits=5, decimal_places=2, default="")
    talla = models.DecimalField(max_digits=5, decimal_places=2, default="")
    cintura = models.DecimalField(max_digits=5, decimal_places=2, default="")
    nota_medica = models.TextField(default="")
    idCita = models.ForeignKey(Cita, on_delete=models.DO_NOTHING)
    idPaciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    """ archivo_medico = models.FileField(upload_to='archivos_medicos/', null=True, blank=True)    """

    def __str__(self):
        return self.idPaciente.nombre + " " + self.idPaciente.apePaterno + " " + self.idPaciente.apeMaterno + " --- " + self.fecha_revision.strftime("%d/%m/%Y")


class ExamenMedico(models.Model):
    idExamenMedico = models.BigAutoField(primary_key=True)
    idPaciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    idUsuario = models.ForeignKey(Usuario, on_delete=models.DO_NOTHING)

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
    hiper_tension = models.CharField(max_length=50, default="")
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
    tabaquismo_edad = models.PositiveIntegerField(default="", null=True, blank=True)
    tabaquismo_cantidad = models.PositiveIntegerField(default="", null=True, blank=True)
    alcoholismo = models.BooleanField(default=False)
    alcoholismo_edad = models.PositiveIntegerField(default="", null=True, blank=True)
    inmunizaciones = models.CharField(max_length=60, default="", null=True, blank=True)
    habitos_higienicos = models.CharField(
        max_length=100, default="", null=True, blank=True
    )
    habitos_alimenticios = models.CharField(
        max_length=100, default="", null=True, blank=True
    )
    especifique_habitos = models.CharField(
        max_length=100, default="", null=True, blank=True
    )

    edad_menarca = models.PositiveIntegerField(default="", null=True, blank=True)
    frecuencia_duracion = models.PositiveIntegerField(default="", null=True, blank=True)
    ultima_menstruacion = models.CharField(
        max_length=50, default="", null=True, blank=True
    )
    num_embarazos = models.PositiveIntegerField(default="", null=True, blank=True)
    num_partos = models.PositiveIntegerField(default="", null=True, blank=True)
    num_cesareas = models.PositiveIntegerField(default="", null=True, blank=True)
    num_abortos = models.PositiveIntegerField(default="", null=True, blank=True)
    ultimo_parto = models.CharField(max_length=50, default="", null=True, blank=True)
    ultimo_aborto = models.CharField(max_length=50, default="", null=True, blank=True)
    planificacion_familiar = models.BooleanField(default=False)
    metodo_planificacion = models.CharField(
        max_length=50, default="", null=True, blank=True
    )

    traumatismos = models.CharField(max_length=70, default="")
    quirurgicos = models.CharField(max_length=70, default="")
    transfusiones = models.CharField(max_length=70, default="")
    grupo_sanguineo = models.CharField(max_length=20, default="")
    factor_rh = models.CharField(max_length=20, default="", null=True, blank=True)
    alergias = models.CharField(max_length=150, default="")
    infecciones = models.CharField(max_length=150, default="")
    dengue_paludismo = models.CharField(max_length=50, default="")
    tatuajes = models.CharField(max_length=70, default="")

    tension_arterial = models.PositiveIntegerField(default="")
    frecuencia_cardiaca = models.PositiveIntegerField(default="")
    talla = models.DecimalField(max_digits=5, decimal_places=2, default="")
    imc = models.DecimalField(max_digits=5, decimal_places=2, default="")
    circunferencia_abd = models.DecimalField(max_digits=5, decimal_places=2, default="")
    circunferencia_cadera = models.DecimalField(
        max_digits=5, decimal_places=2, default=""
    )
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
    prueba_vih = models.CharField(max_length=50, default="")
    antidoping = models.CharField(max_length=50, default="")
    examen_orina = models.CharField(max_length=50, default="")
    diagnostico = models.TextField(default="")

    def __str__(self):
        return self.idPaciente.nombre + " " + self.idPaciente.apePaterno + " " + self.idPaciente.apeMaterno + " --- " + self.fecha.strftime("%d/%m/%Y")


class Evento(models.Model):
    idEvento = models.BigAutoField(primary_key=True)
    idUsuario = models.ForeignKey(Usuario, on_delete=models.DO_NOTHING)
    nom_evento = models.CharField(max_length=60, default="")
    notas =  models.TextField(default="", null=True, blank=True)
    fecha = models.DateField()
    hora = models.TimeField(default="")
    lugar = models.CharField(max_length=60, default="")

    def __str__(self):
        return self.lugar + " --- " + self.fecha.strftime("%d/%m/%Y") + " --- " + self.hora.strftime("%H:%M")