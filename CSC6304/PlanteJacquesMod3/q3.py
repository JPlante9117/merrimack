import requests
from datetime import datetime

def getForecast(url):
    response = requests.get(url)

    if response.ok:
        forecast_json = response.json()
        today = forecast_json['properties']['periods'][0]
        todayDate = datetime.fromisoformat(today['startTime'])
        todayDateFormatted = todayDate.strftime('%m/%d/%Y')
        tomorrow = forecast_json['properties']['periods'][1]
        tomorrowDate = datetime.fromisoformat(tomorrow['startTime'])
        tomorrowDateFormatted = tomorrowDate.strftime('%m/%d/%Y')
        forecast_string = f'{today['name']} ({todayDateFormatted}) the expected temperature is {today['temperature']}{today['temperatureUnit']} and {tomorrow['name']} ({tomorrowDateFormatted}) the expected temperature is {tomorrow['temperature']}{tomorrow['temperatureUnit']}.'
        
        return forecast_string
    else:
        return 'There was an error fetching the data . . .'

def main():
    url = input('Provide a valid api.weather.gov gridpoint url (Hit enter to just do NYC): ') or 'https://api.weather.gov/gridpoints/OKX/33,35/forecast'
    print(getForecast(url))

main()