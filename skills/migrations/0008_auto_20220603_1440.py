# Generated by Django 3.2.7 on 2022-06-03 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0007_auto_20220603_1301'),
    ]

    operations = [
        migrations.AddField(
            model_name='hero',
            name='armor_start',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='hero',
            name='attack_rate_start',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='hero',
            name='dmg_max_start',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='hero',
            name='dmg_min_start',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='hero',
            name='dps_start',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='hero',
            name='ehp_start',
            field=models.FloatField(null=True),
        ),
    ]