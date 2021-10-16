from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:investment_id>/', views.details, name="details"),
    path('filter-values', views.filter_values, name="filter-values")
]