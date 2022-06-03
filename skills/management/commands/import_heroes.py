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
                        primary_stat=row['Primary'], image=row['Img Link'])
            hero.save()
            print(f"{new_count}: {hero.name} ({hero.winrate}, {hero.movement_speed}, {hero.attack_range}, "
                  f"{hero.projectile_speed}, {hero.primary_stat}) – SUCCESS")

        print(f"Imported {new_count} heroes. Previously {prev_count} heroes was deleted.")
