from django.db import models


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
    range_string = models.CharField(max_length=60)
    projectile_speed = models.IntegerField(null=True)
    primary_stat = models.CharField(max_length=4, null=True)
    str_start = models.FloatField(null=True)
    str_gain = models.FloatField(null=True)
    str_string = models.CharField(max_length=60, null=True)
    agi_start = models.FloatField(null=True)
    agi_gain = models.FloatField(null=True)
    agi_string = models.CharField(max_length=60, null=True)
    int_start = models.FloatField(null=True)
    int_gain = models.FloatField(null=True)
    int_string = models.CharField(max_length=60, null=True)
    base_armor = models.FloatField(null=True)
    base_attack_time = models.FloatField(null=True)
    base_hps = models.FloatField(null=True)
    base_mps = models.FloatField(null=True)
    ias_start = models.FloatField(null=True)
    attack_rate_start = models.FloatField(null=True)
    armor_start = models.FloatField(null=True)
    dmg_min_start = models.IntegerField(null=True)
    dmg_max_start = models.IntegerField(null=True)
    dps_start = models.FloatField(null=True)
    ehp_start = models.FloatField(null=True)

    attack_point = models.FloatField(null=True)
    special_stats = models.CharField(max_length=120, null=True)
    image = models.CharField(max_length=60, null=True)

    def get_start_hp(self) -> float:
        return 200.0 + (self.str_start * 20)

    def get_avg_dmg_start(self):
        return (
            self.dmg_min_start + self.dmg_max_start
        ) / 2.0

    def get_start_hps(self) -> float:
        return self.base_hps + (self.str_start * 0.1)

    def get_start_mps(self) -> float:
        return self.base_mps + (self.int_start * 0.05)
