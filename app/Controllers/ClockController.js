

export default class ClockController {
  constructor() {
    this.updateClock();
    let clock = setInterval(this.updateClock, 1000);
    
  }

  updateClock() {
    let date = new Date()
    let time = date.toLocaleTimeString("en-US")
    document.getElementById("time").innerHTML = /*html*/`
  <div class="card-body text-center">
  <h2>${time}</h2>
  </div>
  `
  }
}