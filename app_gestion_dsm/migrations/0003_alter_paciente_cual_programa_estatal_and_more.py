# Generated by Django 4.2.5 on 2023-10-19 23:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_gestion_dsm', '0002_alter_paciente_fecha_registro'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='cual_programa_estatal',
            field=models.CharField(default=None, max_length=70, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='cual_programa_federal',
            field=models.CharField(default=None, max_length=70, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='cual_programa_municipal',
            field=models.CharField(default=None, max_length=70, null=True),
        ),
    ]