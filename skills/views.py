from django.shortcuts import render
from skills.models import Ability, AbilityCombo, Hero
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


def abilities_index(request):
    abilities = Ability.objects.all()
    heroes = Hero.objects.all()
    strong_combos = AbilityCombo.objects.filter(native=False, total_winrate__gte=53.0, synergy__gte=1.5)

    for hero in heroes:
        hero.range_string = \
            f"{hero.attack_range}" if (not hero.ranged_flag) \
            else f"{hero.attack_range} <br><div style='font-size: 12px; color: #ffd77a'>{hero.projectile_speed} ps</div>"
        if hero.primary_stat == "STR":
            hero.str_string = f"<b>{hero.str_string}</b>"
        if hero.primary_stat == "AGI":
            hero.agi_string = f"<b>{hero.agi_string}</b>"
        if hero.primary_stat == "INT":
            hero.int_string = f"<b>{hero.int_string}</b>"

    context = {

        'abilities': abilities,
        'heroes': heroes,
        'combos': strong_combos

    }

    return render(request, 'abilities_index.html', context)
