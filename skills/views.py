from django.shortcuts import render
from skills.models import Ability, AbilityCombo, Hero
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


def abilities_index(request):

    abilities = Ability.objects.all()
    heroes = Hero.objects.all()

    context = {

        'abilities': abilities,
        'heroes': heroes

    }

    return render(request, 'abilities_index.html', context)
