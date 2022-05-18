from django.core.management.base import BaseCommand
from skills.models import Ability
import pandas as pd


class Command(BaseCommand):
    def handle(self, *args, **options):
        prev_count = Ability.objects.all().count()
        Ability.objects.all().delete()
        abilities_df = pd.read_csv("result.csv")
        print(f"Deleted {prev_count} abilities.")
        print("Importing: ")
        new_count = 1
        for index, row in abilities_df.iterrows():
            ability = Ability(name=row['Ability Name'], hero=row['Hero'], image=row['Img Link'],
                              total_winrate=float(row['HS Win'].strip("%")), avg_pickorder=float(row['HS Avg Pick']),
                              agi_winrate=float(row['Agi WR'].strip("%")), agi_pickorder=float(row['Agi Avg Pick']),
                              int_winrate=float(row['Int WR'].strip("%")), int_pickorder=float(row['Int Avg Pick']),
                              str_winrate=float(row['Str WR'].strip("%")), str_pickorder=float(row['Str Avg Pick']),
                              melee_winrate=float(row['Melee WR'].strip("%")), melee_pickorder=float(row['Melee Avg Pick']),
                              ranged_winrate=float(row['Ranged WR'].strip("%")), ranged_pickorder=float(row['Ranged Avg Pick']))
            ability.save()
            print(f"{index}: {ability.name} ({ability.hero}, {ability.image}, {ability.total_winrate}, {ability.avg_pickorder}) – SUCCESS")
            new_count = new_count + 1
        print(f"Imported {new_count} abilities. Previously {prev_count} abilities was deleted.")



