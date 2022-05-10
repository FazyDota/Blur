from django.core.management.base import BaseCommand
from skills.models import Ability, AbilityCombo
import csv


class Command(BaseCommand):
    def handle(self, *args, **options):
        Ability.objects.all().delete()
        with open("result.csv", 'r') as file:
            reader = csv.reader(file)
            next(reader)
            for row in reader:
                converted_floats = []
                for item in row[2:14]:
                    converted_floats.append(float(item.strip("%")))
                ability = Ability(name=row[0], hero=row[1], agi_winrate=converted_floats[0], agi_pickorder=converted_floats[1], int_winrate=converted_floats[2],int_pickorder=converted_floats[3], str_winrate=converted_floats[4], str_pickorder=converted_floats[5], melee_winrate=converted_floats[6],melee_pickorder=converted_floats[7], ranged_winrate=converted_floats[8], ranged_pickorder=converted_floats[9],total_winrate=converted_floats[10], avg_pickorder=converted_floats[11], image=row[14])
                ability.save()
                self.stdout.write(f"Saved ability with name: {row[0]}", ending='\n')

        AbilityCombo.objects.all().delete()
        with open("ability_combos.csv", 'r') as file:
            reader = csv.reader(file)
            next(reader)
            for row in reader:
                converted_floats = [float(row[3].strip("%")), float(row[7].strip("%")), float(row[8].strip("%")), float(row[9].strip("%"))]

                abilityCombo = AbilityCombo(ability_1_name=row[0], ability_1_image=row[1], ability_1_hero=row[2], ability_1_winrate=converted_floats[0],
                                            ability_2_name=row[4], ability_2_image=row[5], ability_2_hero=row[6], ability_2_winrate=converted_floats[1],
                                            total_winrate=converted_floats[2],
                                            synergy=converted_floats[3])
                abilityCombo.save()
                self.stdout.write(f"Saved abilityCombo: {row[0]} X {row[4]}", ending='\n')



