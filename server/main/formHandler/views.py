import datetime

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
def handleSubmit(request):
    data = ''
    if request.method == 'POST':
        data = get_weather(13.6885, 75.2456)
        temp = data['main']['temp']
        humidity = data['main']['humidity']
        rainfall = data.get('rain', {}).get('1h', 0)
        print(temp)
        print(humidity)
        print(rainfall)
    return JsonResponse(data)


