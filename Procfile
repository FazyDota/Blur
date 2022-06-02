web: gunicorn vintage_project.wsgi
release: python manage.py migrate; python manage.py import_abilities; python manage.py import_combos; python manage.py import_heroes;
