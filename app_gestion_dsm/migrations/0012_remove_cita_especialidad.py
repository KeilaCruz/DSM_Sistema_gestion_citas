# Generated by Django 4.2.5 on 2023-11-07 19:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_gestion_dsm', '0011_remove_paciente_idusuario_cita_idusuario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cita',
            name='especialidad',
        ),
    ]
