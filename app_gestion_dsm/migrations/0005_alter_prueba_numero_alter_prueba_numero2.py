# Generated by Django 4.2.5 on 2023-10-05 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_gestion_dsm', '0004_prueba_numero_prueba_numero2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prueba',
            name='numero',
            field=models.PositiveSmallIntegerField(blank=True, default={0}, null=True),
        ),
        migrations.AlterField(
            model_name='prueba',
            name='numero2',
            field=models.PositiveSmallIntegerField(blank=True, default={0}, null=True),
        ),
    ]
