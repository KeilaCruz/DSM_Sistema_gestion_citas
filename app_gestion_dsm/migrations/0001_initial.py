# Generated by Django 4.2.5 on 2023-09-22 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Paciente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(default='', max_length=45)),
                ('apePaterno', models.CharField(default='', max_length=45)),
                ('apeMaterno', models.CharField(default='', max_length=45)),
                ('edad', models.PositiveIntegerField(default='')),
                ('estado_civil', models.CharField(default='', max_length=15)),
                ('CURP', models.CharField(default='', max_length=18)),
                ('escolaridad', models.CharField(default='', max_length=20)),
                ('colonia', models.CharField(default='', max_length=45)),
                ('calle', models.CharField(default='', max_length=45)),
                ('numero_exterior', models.PositiveIntegerField(default='')),
                ('referencia', models.TextField(default='')),
                ('CP', models.PositiveIntegerField(default='')),
                ('derecho_habiencia', models.CharField(default='', max_length=9)),
                ('unidad_salud', models.CharField(default='', max_length=150)),
                ('ultima_visita_medico', models.DateField(default='')),
                ('programa_gobierno_federal', models.BooleanField(default=False)),
                ('programa_gobierno_estatal', models.BooleanField(default=False)),
                ('programa_gobierno_municipal', models.BooleanField(default=False)),
                ('numero_personas_vive', models.PositiveIntegerField(default='')),
            ],
        ),
    ]