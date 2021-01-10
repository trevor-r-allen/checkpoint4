// @ts-ignore
export const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 3000
});
// @ts-ignore
export const openWeather = axios.create({
  baseURL: "http://openweathermap.org/img/wn",
  timeout: 3000
});