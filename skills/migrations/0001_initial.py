# Generated by Django 3.2.7 on 2021-11-24 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ability',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('hero', models.CharField(max_length=30)),
                ('agi_winrate', models.FloatField()),
                ('agi_pickorder', models.FloatField()),
                ('int_winrate', models.FloatField()),
                ('int_pickorder', models.FloatField()),
                ('str_winrate', models.FloatField()),
                ('str_pickorder', models.FloatField()),
            ],
        ),
    ]
