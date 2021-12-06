from django.shortcuts import render
from skills.models import Ability
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

    context = {

        'abilities': abilities

    }

    return render(request, 'abilities_index_new.html', context)

