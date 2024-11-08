"""
Jacques Plante - CSC6304 Week 3

In order to run, this code requires pip installation of:
requests
Flask
"""

import requests
from datetime import datetime

def get_next_day(timesArr):
    """
    Given a list of time periods with startTime ISO strings, find and return the first entry
    that is not the same day as today
    """
    today = timesArr[0]
    today_timestamp = today['startTime']
    today_date = datetime.fromisoformat(today_timestamp).date()
    for index, time in enumerate(timesArr):
        time_timestamp = time['startTime']
        time_date = datetime.fromisoformat(time_timestamp).date()
        if time_date != today_date:
            return time
        
def print_with_emphasis(s):
    """
    Prints the provided string with some separation and decoration to make it easier to read in the console
    """
    print('')
    print('*' * 10)
    print('')
    print(s)
    print('')
    print('*' * 10)
    print('')

def main():
    """
    Requests from a user a latitude and longitude, makes a request to the gridpoints endpoint,
    and if valid makes another request to the forecast endpoint. If that is also valid, enters
    a user interaction state where you can request certain details about the weather.
    """
    print("""
Let's check the weather!
          
Please enter a latitude and longitude.
""")
    # Get the latitude and longitude from the user
    lat = input("Latitude: ")
    long = input("Longitude: ")
    # Make the request to the gridpoints API
    print("\nFetching Gridpoints for those coordinates . . . \n")
    gridpoints_resp = requests.get(f"http://localhost:5005/gridpoints/{lat},{long}")
    # Make sure it returns 200 before continuing
    if (not gridpoints_resp.ok):
        print(f"Gridpoint Response: {gridpoints_resp.status_code}")
        return
    
    # Parse out the JSON into our used properties
    gridpoints_json    = gridpoints_resp.json()
    gridpoints_props   = gridpoints_json['properties']
    office             = gridpoints_props['gridId']
    gridX              = gridpoints_props['gridX']
    gridY              = gridpoints_props['gridY']
    # Get relative location information for later!
    relative_loc       = gridpoints_props['relativeLocation']
    relative_loc_props = relative_loc['properties']
    relative_area      = f"{relative_loc_props['city']}, {relative_loc_props['state']}"

    # Use the above properties to request the forecast
    print("\nFetching forecast information . . .\n")
    forecast_resp = requests.get(f"http://localhost:5005/forecast/{office}/{gridX},{gridY}")

    # Make sure it returns 200 before continuing
    if (not forecast_resp.ok):
        print(f"Forecast Response: {forecast_resp.status_code}")
        return
    
    # Access the properties of the forecast response
    forecast_json  = forecast_resp.json()
    forecast_props = forecast_json['properties']
    times          = forecast_props['periods']
    
    # Enter a user interaction state where they can request certain details about the weather
    while True:
        user_choice = input(f"""What would you like to know about the weather in {relative_area}?
1. Detailed Forecast
2. Temperature
3. Wind Speeds
4. Tomorrow's Weather
0. Quit
""")
        today = times[0]
        match user_choice:
            # Detailed Forecast Requested
            case '1':
                detailed = today['detailedForecast']
                print_with_emphasis(f"Current forecast: {detailed}")
            # Temperature Requested
            case '2':
                temp = today['temperature']
                unit = today['temperatureUnit']
                print_with_emphasis(f"Currently, the temperature is {temp}{unit}")
            # Wind Speeds Requested
            case '3':
                wind = today['windSpeed']
                direction = today['windDirection']
                print_with_emphasis(f"Wind travelling {direction} at {wind}")
            # Tomorrow Requested
            case '4':
                # Find "tomorrow" in comparison to the current day
                tomorrow = get_next_day(times)
                if (tomorrow):
                    # Print tomorrow's detailed forecast
                    tomorrow_detailed = tomorrow['detailedForecast']
                    print_with_emphasis(f"Tomorrow's forecast: {tomorrow_detailed}")
                else:
                    print_with_emphasis("Sorry, could not find tomorrow's weather...")
            # Quitting Program
            case '0':
                print_with_emphasis("Goodbye!")
                return

if __name__ == "__main__":
    main()