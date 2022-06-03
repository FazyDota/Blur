from django.core.management.base import BaseCommand
from skills.models import Hero
import pandas as pd


class Command(BaseCommand):
    def handle(self, *args, **options):
        prev_count = Hero.objects.all().count()
        Hero.objects.all().delete()
        heroes_df = pd.read_csv("heroes.csv")
        print(f"Deleted {prev_count} abilities.")
        print("Importing: ")
        new_count = 0
        for index, row in heroes_df.iterrows():
            new_count = new_count + 1
            hero = Hero(name=row['Hero'], winrate=(row['Winrate']).strip("%"), movement_speed=row['MS'],
                        attack_range=row['Range'], ranged_flag=row['Ranged Flag'], projectile_speed=row['Projectile Speed'],
                        primary_stat=row['Primary'], image=row['Img Link'],
                        str_start=row['STR'], str_gain=row['STR+'],
                        agi_start=row['AGI'], agi_gain=row['AGI+'],
                        int_start=row['INT'], int_gain=row['INT+'],
                        dmg_min_start=row['Dmg Min'], dmg_max_start=row['Dmg Max'],
                        base_armor=row['Base Armor'], base_attack_time=row['BAT'],
                        base_hps=row['Base HPS'], base_mps=row['Base MPS'],
                        ias_start=row['Base IAS'])
            hero.str_string = f"{hero.str_start}+{hero.str_gain}"
            hero.agi_string = f"{hero.agi_start}+{hero.agi_gain}"
            hero.int_string = f"{hero.int_start}+{hero.int_gain}"
            hero.attack_rate_start = (hero.ias_start + hero.agi_start) / (100.0 * hero.base_attack_time)
            hero.dps_start = hero.attack_rate_start * ((hero.dmg_min_start+hero.dmg_max_start)/2)
            hero.armor_start = hero.base_armor + (hero.agi_start/6.0)
            hero.ehp_start = (200 + hero.str_start*20)/(1-((0.06*hero.armor_start )/(1+0.06*hero.armor_start )))

            hero.save()
            print(f"{new_count}: {hero.name} ({hero.winrate}, {hero.movement_speed}, {hero.attack_range}, "
                  f"{hero.projectile_speed}, {hero.primary_stat}, {hero.str_string}/{hero.agi_string}/{hero.int_string}) – SUCCESS")

        print(f"Imported {new_count} heroes. Previously {prev_count} heroes was deleted.")
