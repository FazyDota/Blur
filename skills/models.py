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
