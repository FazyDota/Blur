from django.core.management.base import BaseCommand
from skills.models import Ability
import csv


class Command(BaseCommand):
    def handle(self, *args, **options):
        Ability.objects.all().delete()
        with open("result.csv", 'r') as file:
            reader = csv.reader(file)
            next(reader)
            for row in reader:
                converted_floats = []
                for item in row[2:12]:
                    converted_floats.append(float(item.strip("%")))
                ability = Ability(name=row[0], hero=row[1], agi_winrate=converted_floats[0], agi_pickorder=converted_floats[1], int_winrate=converted_floats[2],int_pickorder=converted_floats[3], str_winrate=converted_floats[4], str_pickorder=converted_floats[5], melee_winrate=converted_floats[6],melee_pickorder=converted_floats[7], ranged_winrate=converted_floats[8], ranged_pickorder=converted_floats[9],image=row[12])
                ability.save()
                self.stdout.write(f"Saved  ability with name: {row[0]}", ending='\n')
