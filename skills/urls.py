from django.urls import path
from skills import views
from .views import HomePageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("abilities", views.abilities_index, name="abilities_index"),
    path("abilities2", views.abilities_index_new, name="abilities_index_new"),
]
