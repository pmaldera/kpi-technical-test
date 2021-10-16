from django.db.models.query_utils import Q
from django.http.response import JsonResponse
from django.shortcuts import get_object_or_404, render
from django.core import serializers

from .models import Investment


def index(request):
    try:
        query = Q()
        for key in request.GET.keys():
            if(hasattr(Investment, key)):
                query &= Q(**{key: request.GET.get(key)})
        return JsonResponse(
            list(Investment.objects.filter(query).values()),
            status=200,
            safe=False
        )
    except:
        return JsonResponse(
            {
                'error': "Something went wrong.",
                'shown_message': "Something went wrong."
            },
            status=500,
            safe=False
        )

def details(request, investment_id):
    try:
        investment = Investment.objects.filter(id=investment_id)
        if(investment.exists()):
            return JsonResponse(
                investment.values().first(),
                status=200,
                safe=False
            )
        else:
            return JsonResponse(
                {
                    'error': "Not found",
                    'shown_message': "Couldn't find this investment"
                },
                status=404
            )
    except:
        return JsonResponse(
            {
                'error': "Something went wrong.",
                'shown_message': "Something went wrong."
            },
            status=500,
            safe=False
        )

def filter_values(request):
    try:
        return JsonResponse(
            {
                'ville': list(Investment.objects.order_by().values_list('ville', flat=True).distinct()),
                'etat_d_avancement': list(Investment.objects.order_by().values_list('etat_d_avancement', flat=True).distinct())
            },
            status=200
        )
    except:
        return JsonResponse(
            {
                'error': "Something went wrong.",
                'shown_message': "Something went wrong."
            },
            status=500,
            safe=False
        )