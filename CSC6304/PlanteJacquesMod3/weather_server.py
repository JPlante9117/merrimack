from flask import Flask, jsonify
import requests

app = Flask(__name__)
weather_api_root = 'https://api.weather.gov'

@app.route('/gridpoints/<lat>,<long>')
def get_gridpoints(lat, long):
    """
    Sends a GET request to the api.weather.gov points endpoint
    """
    api_route = f"{weather_api_root}/points/{lat},{long}"
    resp = requests.get(api_route)
    print("Getting gridpoints . . .\n")
    if resp.ok:
        return jsonify(resp.json())
    return jsonify({'error': 'Failed to get gridpoints'}, resp.status_code)

@app.route('/forecast/<office>/<x>,<y>')
def get_forecast(office, x, y):
    """
    Sends a GET request to the api.weather.gov forecast endpoint
    """
    api_route = f"{weather_api_root}/gridpoints/{office}/{x},{y}/forecast"
    resp = requests.get(api_route)
    print("Getting forecast . . .\n")
    if resp.ok:
        return jsonify(resp.json())
    return jsonify({'error': 'Failed to get forecast'}, resp.status_code)

if __name__ == '__main__':
    app.run(port=5005)