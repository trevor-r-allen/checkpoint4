export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = Math.round(data.main.temp - 273.15)
    this.fahrenheit = Math.round((data.main.temp - 273.15) * (9/5) + 32)
    this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  }

  get Template() {
    return /*html*/`
    
    <div class="card-body">
        <div class="d-flex align-items-center" onclick="app.weatherController.toggleUnits(${this.celsius}, ${this.fahrenheit})">
            <img src="${this.icon}" alt="">
            <h3 class="card-title mb-0 mr-1" id="temp">${this.celsius}°</h3>
        </div>
        <p class="card-text">${this.city}</p>
    </div>
    `
  }
  
}

{/* <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onclick="app.weatherController.toggleUnits(${this.celsius})" checked>
        <label class="form-check-label" for="inlineRadio1">C</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onclick="app.weatherController.toggleUnits(${this.fahrenheit})">
        <label class="form-check-label" for="inlineRadio2">F</label>
      </div> */}