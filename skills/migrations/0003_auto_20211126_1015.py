# Generated by Django 3.2.7 on 2021-11-26 09:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0002_auto_20211125_1909'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ability',
            name='hero',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='ability',
            name='image',
            field=models.CharField(max_length=60, null=True),
        ),
        migrations.AlterField(
            model_name='ability',
            name='name',
            field=models.CharField(max_length=60),
        ),
    ]