from django.core.management.base import BaseCommand
from skills.models import AbilityCombo
import pandas as pd


class Command(BaseCommand):
    def handle(self, *args, **options):
        prev_count = AbilityCombo.objects.all().count()
        AbilityCombo.objects.all().delete()
        abilities_df = pd.read_csv("ability_combos.csv")
        print(f"Deleted {prev_count} ability combos.")
        print("Importing: ")
        new_count = 0
        for index, row in abilities_df.iterrows():
            new_count = new_count + 1
            is_native = True
            if row['Native'] == "NO":
                is_native = False
            ability_combo = AbilityCombo(ability_1_name=row['Ability 1'], ability_1_image=row['Ability 1 Icon'],
                                         ability_1_hero=row['Hero 1'], ability_1_winrate=float(row['A1 WR'].strip("%")),
                                         ability_2_name=row['Ability 2'], ability_2_image=row['Ability 2 Icon'],
                                         ability_2_hero=row['Hero 2'], ability_2_winrate=float(row['A2 WR'].strip("%")),
                                         total_winrate=float(row['WR'].strip("%")), synergy=float(row['Synergy Delta'].strip("%")),
                                         sample=row['Sample'], native=is_native)
            ability_combo.save()
            print(f"{new_count}: {ability_combo.ability_1_name}-{ability_combo.ability_2_name}, "
                  f"({ability_combo.ability_1_image}, {ability_combo.ability_2_image}, "
                  f"{ability_combo.total_winrate}, {ability_combo.synergy}, {ability_combo.native} ) – SUCCESS")

        print(f"Imported {new_count} ability combos. Previously {prev_count} combos was deleted.")
