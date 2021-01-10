import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

function _drawWeather() {
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  document.getElementById("weather").innerHTML = ProxyState.weather.Template
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  toggleUnits(c, f){
    let currentUnits = document.getElementById('temp').innerHTML
    if (currentUnits == c + "°") {
      document.getElementById("temp").innerHTML = f + "°"
    }
    else{
      document.getElementById("temp").innerHTML = c + "°"
    }
  }
}
