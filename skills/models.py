from django.db import models


# Create your models here.
class Ability(models.Model):
    name = models.CharField()
    hero = models.CharField()
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
    image = models.CharField(null=True)
