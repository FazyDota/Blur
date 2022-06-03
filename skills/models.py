from django.db import models


# Create your models here.
class Ability(models.Model):
    name = models.CharField(max_length=60)
    hero = models.CharField(max_length=60)
    agi_winrate = models.FloatField(null=True)
    agi_pickorder = models.FloatField(null=True)
    int_winrate = models.FloatField(null=True)
    int_pickorder = models.FloatField(null=True)
    str_winrate = models.FloatField(null=True)
    str_pickorder = models.FloatField(null=True)
    melee_winrate = models.FloatField(null=True)
    melee_pickorder = models.FloatField(null=True)
    ranged_winrate = models.FloatField(null=True)
    ranged_pickorder = models.FloatField(null=True)
    total_winrate = models.FloatField(null=True)
    avg_pickorder = models.FloatField(null=True)
    image = models.CharField(max_length=60, null=True)


class AbilityCombo(models.Model):
    ability_1_name = models.CharField(max_length=60)
    ability_1_image = models.CharField(max_length=60, null=True)
    ability_1_hero = models.CharField(max_length=60)
    ability_1_winrate = models.FloatField(null=True)
    ability_2_name = models.CharField(max_length=60)
    ability_2_image = models.CharField(max_length=60, null=True)
    ability_2_hero = models.CharField(max_length=60)
    ability_2_winrate = models.FloatField(null=True)
    total_winrate = models.FloatField(null=True)
    synergy = models.FloatField(null=True)
    native = models.BooleanField(null=True)
    sample = models.IntegerField(null=True)


class Hero(models.Model):
    name = models.CharField(max_length=60)
    winrate = models.FloatField(null=True)
    movement_speed = models.IntegerField(null=True)
    attack_range = models.IntegerField(null=True)
    ranged_flag = models.BooleanField(null=True)
    projectile_speed = models.IntegerField(null=True)
    primary_stat = models.CharField(max_length=4, null=True)
    str_start = models.FloatField(null=True)
    str_gain = models.FloatField(null=True)
    agi_start = models.FloatField(null=True)
    agi_gain = models.FloatField(null=True)
    int_start = models.FloatField(null=True)
    int_gain = models.FloatField(null=True)
    base_armor = models.FloatField(null=True)
    base_attack_time = models.FloatField(null=True)
    base_hps = models.FloatField(null=True)
    base_mps = models.FloatField(null=True)
    ias_start = models.FloatField(null=True)
    attack_point = models.FloatField(null=True)
    special_stats = models.CharField(max_length=120, null=True)
    image = models.CharField(max_length=60, null=True)
