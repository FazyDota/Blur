from django.core.management.base import BaseCommand
from skills.models import Ability
import pandas as pd
import csv
import shutil
from datetime import datetime


def cut_img_filename(template_img_link):
    return template_img_link[7:]


def unify_data():
    template_path = "input_data/templates/abilities_template.csv"
    time = datetime.now().strftime("%Y%m%d_%H%M")
    unified_csv_path = f"input_data/processed/abilities_sheet_{time}.csv"
    shutil.copy2(template_path, unified_csv_path)

    result = pd.read_csv(unified_csv_path)
    datestring = datetime.now().strftime("%Y%m%d")

    # todo grab latest file of each

    winrates_path = f"input_data/abilities_winrates_hs_{datestring}.csv"
    winrates_attribute_path = f"input_data/abilities_per_attributes_{datestring}.csv"
    winrates_attack_path = f"input_data/abilities_per_attacktype_{datestring}.csv"

    with open(winrates_path) as winrates_file:
        reader = csv.DictReader(winrates_file)
        for row in reader:
            image_link = row['Image_Link']
            image_filename = image_link[image_link.rindex("/") + 1:]

            overall_win = row['Overall_Win']
            hs_win = row['HS_Win']
            overall_pick = row['Overall_Pick']
            hs_pick = row['HS_Pick']

            result.loc[result['Img Link'].apply(cut_img_filename) == image_filename, ['Overall Win', 'HS Win',
                                                                                      'Overall Avg Pick',
                                                                                      'HS Avg Pick']] \
                = [overall_win, hs_win, overall_pick, hs_pick]

    with open(winrates_attribute_path) as winrates_atr_file:
        reader = csv.DictReader(winrates_atr_file)
        for row in reader:
            image_link = row['Image_Link']
            image_filename = image_link[image_link.rindex("/") + 1:]

            agi_win = row['Agi_Win']
            agi_pick = row['Agi_Pick']
            int_win = row['Int_Win']
            int_pick = row['Int_Pick']
            str_win = row['Str_Win']
            str_pick = row['Str_Pick']

            result.loc[result['Img Link'].apply(cut_img_filename) == image_filename,
                       ["Agi WR", "Agi Avg Pick", "Int WR", "Int Avg Pick", "Str WR", "Str Avg Pick"]] \
                = [agi_win, agi_pick, int_win, int_pick, str_win, str_pick]

    with open(winrates_attack_path) as winrates_attack_file:
        reader = csv.DictReader(winrates_attack_file)
        for row in reader:
            image_link = row['Image_Link']
            image_filename = image_link[image_link.rindex("/") + 1:]

            melee_win = row['Melee_Win']
            melee_pick = row['Melee_Pick']
            ranged_win = row['Ranged_Win']
            ranged_pick = row['Ranged_Pick']

            result.loc[result['Img Link'].apply(cut_img_filename) == image_filename,
                       ['Melee WR', 'Melee Avg Pick', 'Ranged WR', 'Ramged Avg Pick']] = [melee_win, melee_pick,
                                                                                          ranged_win, ranged_pick]

    result.to_csv(unified_csv_path)
    return unified_csv_path


class Command(BaseCommand):

    def handle(self, *args, **options):
        prev_count = Ability.objects.all().count()
        Ability.objects.all().delete()
        abilities_df = pd.read_csv(unify_data())
        print(f"Deleted {prev_count} abilities.")
        print("Importing: ")
        new_count = 0
        for index, row in abilities_df.iterrows():
            new_count = new_count + 1
            ability = Ability(
                name=row['Ability Name'], hero=row['Hero'], image=row['Img Link'],
                total_winrate=float(row['HS Win'].strip("%")), avg_pickorder=float(row['HS Avg Pick']),
                agi_winrate=float(row['Agi WR'].strip("%")), agi_pickorder=float(row['Agi Avg Pick']),
                int_winrate=float(row['Int WR'].strip("%")), int_pickorder=float(row['Int Avg Pick']),
                str_winrate=float(row['Str WR'].strip("%")), str_pickorder=float(row['Str Avg Pick']),
                melee_winrate=float(row['Melee WR'].strip("%")), melee_pickorder=float(row['Melee Avg Pick']),
                ranged_winrate=float(row['Ranged WR'].strip("%")), ranged_pickorder=float(row['Ranged Avg Pick']))
            ability.save()
            print(
                f"{new_count}: {ability.name} ({ability.hero}, {ability.image}, {ability.total_winrate}, "
                f"{ability.avg_pickorder}) – SUCCESS")

        print(f"Imported {new_count} abilities. Previously {prev_count} abilities was deleted.")
