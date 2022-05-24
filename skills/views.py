from django.shortcuts import render
from skills.models import Ability, AbilityCombo, Hero
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


def abilities_index(request):

    abilities = Ability.objects.all()
    heroes = Hero.objects.all()
    strong_combos = AbilityCombo.objects.filter(native=False, total_winrate__gte=53.0, synergy__gte=1.5)

    context = {

        'abilities': abilities,
        'heroes': heroes,
        'combos': strong_combos

    }

    return render(request, 'abilities_index.html', context)
