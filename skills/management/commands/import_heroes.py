from django.core.management.base import BaseCommand
from skills.models import Hero
import pandas as pd
from datetime import datetime
import shutil
import csv


def cut_img_filename(template_img_link):
    return template_img_link[7:]


def unify_data():
    template_path = "input_data/templates/heroes_template.csv"
    time = datetime.now().strftime("%Y%m%d_%H%M")
    unified_csv_path = f"input_data/processed/heroes_sheet_{time}.csv"
    shutil.copy2(template_path, unified_csv_path)

    result = pd.read_csv(unified_csv_path)
    datestring = datetime.now().strftime("%Y%m%d")

    hero_table_path = f"input_data/hero_table_{datestring}.csv"

    with open(hero_table_path) as hero_table_file:
        reader = csv.DictReader(hero_table_file)
        for row in reader:
            hero_name = row['Hero']

            data = [row['Primary_attribute'], row['STR_base'], row['STR_gain'], row['AGI_base'], row['AGI_gain'],
                    row['INT_base'], row['INT_gain'], row['MS'], row['Armor_start'], row['Dmg_min'], row['Dmg_max'],
                    row['Range'], row['Projectile_speed'], row['AS_base'], row['BAT'], row['Attack_point'],
                    row['Vision_day'], row['Vision_night'], row['Turn_rate'], row['HP_regen']]

            result.loc[result['Hero'] == hero_name,
                       ['Primary', 'STR', 'STR+', 'AGI', 'AGI+', 'INT', 'INT+', 'MS', 'Armor',
                        'Dmg Min', 'Dmg Max', 'Range', 'Projectile Speed', 'Base IAS', 'BAT', 'Attack point',
                        'Vision day', 'Vision night', 'Turn rate', 'HPS']] \
                = data

    result.to_csv(unified_csv_path)
    return unified_csv_path


class Command(BaseCommand):
    def handle(self, *args, **options):
        prev_count = Hero.objects.all().count()
        Hero.objects.all().delete()
        heroes_df = pd.read_csv(unify_data())
        print(f"Deleted {prev_count} heroes.")
        print("Importing: ")
        new_count = 0
        for index, row in heroes_df.iterrows():
            new_count = new_count + 1
            hero = Hero(name=row['Hero'], winrate=(row['Winrate']).strip("%"), image=row['Img Link'],
                        agi_gain=row['AGI+'], agi_start=row['AGI'], armor_start=row['Armor'],
                        attack_point=row['Attack point'], attack_range=row['Range'], BAT=row['BAT'],
                        dmg_max_start=row['Dmg Max'], dmg_min_start=row['Dmg Min'],
                        hps_start=row['HPS'] - int(row['STR'] * 0.1), ias_start=row['Base IAS'],
                        int_gain=row['INT+'], int_start=row['INT'], movement_speed=row['MS'], mps_base=row['Base MPS'],
                        primary_stat=row['Primary'].upper()[:3],  projectile_speed=row['Projectile Speed'],
                        ranged_flag=row['Ranged Flag'], str_gain=row['STR+'], str_start=row['STR'],
                        turn_rate=row['Turn rate'], vision_day=row['Vision day'], vision_night=row['Vision night'])

            hero.str_string = f"{hero.str_start}+{hero.str_gain}"
            hero.agi_string = f"{hero.agi_start}+{hero.agi_gain}"
            hero.int_string = f"{hero.int_start}+{hero.int_gain}"

            hero.attack_rate_start = (hero.ias_start + hero.agi_start) / (100.0 * hero.BAT)
            hero.armor_base = (hero.agi_start / 6.0) - hero.armor_start
            hero.hps_base = hero.hps_start - (hero.str_start * 0.1)
            hero.dps_start = hero.attack_rate_start * ((hero.dmg_min_start + hero.dmg_max_start) / 2)
            hero.ehp_start = (200 + hero.str_start * 20) / (
                        1 - ((0.06 * hero.armor_start) / (1 + 0.06 * hero.armor_start)))

            hero.save()
            print(f"{new_count}: {hero.name} ({hero.winrate}, {hero.movement_speed}, {hero.attack_range}, "
                  f"{hero.projectile_speed}, {hero.primary_stat}, "
                  f"{hero.str_string}/{hero.agi_string}/{hero.int_string}) – SUCCESS")

        print(f"Imported {new_count} heroes. Previously {prev_count} heroes was deleted.")
