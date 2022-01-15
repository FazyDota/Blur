from django.shortcuts import render
from skills.models import Ability, AbilityCombo
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


def abilities_index(request):

    abilities = Ability.objects.all()

    context = {

        'abilities': abilities

    }

    return render(request, 'abilities_index.html', context)


def abilities_index_new(request):

    abilities = Ability.objects.all()
    ability_combos = AbilityCombo.objects.all()

    context = {

        'abilities': abilities,
        'ability_combos': ability_combos

    }

    return render(request, 'abilities_index_new.html', context)

