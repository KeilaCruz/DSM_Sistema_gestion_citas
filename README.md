# DSM_Sistema_gestion_citas
# Comandos de configuración de proyecto
1. pip install virtualenv
2. python -m venv nombre_carpeta
3. .\venv\Scripts\activate
4.  pip install django
5.  django-admin startproject nombre_proyecto .
6.  python manage.py runserver
7.  python manage.py startapp nombre_aplicacion
8.  python manage.py migrate
9.  pip install psycopg2
10.  pip install djangorestframework
11.  pip install django-cors-headers
  # Crear el codigo para crear la tabla
13.  python manage.py makemigrations OPCIONAL_COLOCAR_DE_LO_QUE_DESEEMOS_MIGRAR
 # Ejecutar el codigo creado
14. python manage.py migrate NOMBRE_DELA_APP
15. python manage.py createsuperuser
