import datetime
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import requests
# Create your views here


def get_weather(lat, long):
    url = 'https://api.openweathermap.org/data/2.5/weather'
    params = {
        'lat': lat,
        'lon': long,
        'appid': '94c394240c319fb61d1fb8f44b41c916',
        'units': 'imperial'
    }
    response = requests.get(url, params=params)

    data = response.json()
    if response.status_code == 200:
        return data
    else:
        return {}




@csrf_exempt
@api_view(['POST'])
def handleSubmit(request):
    data = ''
    if request.method == 'POST':
        lat = request.data.get('Latitude')
        long = request.data.get('Longitude')
        N = request.data.get('N')
        P = request.data.get('P')
        K = request.data.get('K')
        pH = request.data.get('pH')
        data = get_weather(lat, long)
        temp = data['main']['temp']
        humidity = data['main']['humidity']
        rainfall = data.get('rain', {}).get('1h', 0)
        print(temp)
        print(humidity)
        print(rainfall)
    return JsonResponse({'data': data})


