# Generated by Django 4.2.5 on 2023-11-14 17:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_gestion_dsm', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuario',
            name='ape_materno',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='ape_paterno',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='idRol',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='nombre',
        ),
    ]