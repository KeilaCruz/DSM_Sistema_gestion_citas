# Generated by Django 4.2.5 on 2023-09-28 17:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_gestion_dsm', '0004_paciente_telefono_alter_cita_fecha_cita_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='paciente',
            name='programa_gobierno_estatal',
        ),
        migrations.RemoveField(
            model_name='paciente',
            name='programa_gobierno_federal',
        ),
        migrations.RemoveField(
            model_name='paciente',
            name='programa_gobierno_municipal',
        ),
    ]
