from django.core.management.base import BaseCommand
from skills.models import Hero
import csv


class Command(BaseCommand):
    def handle(self, *args, **options):
        Hero.objects.all().delete()
        with open("model_winrate.csv", 'r') as file:
            reader = csv.reader(file)
            next(reader)
            for row in reader:
                winrate_float = row[1].strip("%")
                hero = Hero(name=row[0], winrate=winrate_float)
                hero.save()
                self.stdout.write(f"Saved hero with name: {row[0]}", ending='\n')


