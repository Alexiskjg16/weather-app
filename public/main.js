const KEY = '6637f2114ed7b6f45315bca3c1f53658'
const main = () => {
  document.querySelector('h1').textContent += '?'
}

const weatherKey = () => {
  const Weatherbase_url = `https://openweathermap.org/api/data/2.5/weather?q=`

  const _url =`${Weatherbase_url}forecast?appid=${key}zip=${'.input'}&unit=imperial`
}

const WeatherAPI = () => {
  const userInput = document.querySelector('.input').value
  console.log(userInput)

  const _url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${KEY}&units=imperial`

  fetch(_url)
  .then(resp => {
    console.log("response = ", resp)
    if ( resp.status === 200){
      return resp.json()
    } else {
      console.log("error", resp)
    }
  }).then(searchResults => {
    console.log("search results = ", searchResults)
    const parent = document.querySelector('.searchResults')
    searchResults.main.temp
    console.log(searchResults.main.temp)
    document.querySelector('.weatherResults').textContent = "High Today: " + searchResults.main.temp_max + "F"
    document.querySelector('.weatherLow').textContent = "Low Today: " + searchResults.main.temp_min + "F"
    document.querySelector('.weatherRainResults').textContent = "Forecast: " + searchResults.weather[0].main
    document.querySelector('.weathericon').setAttribute('src','http://openweathermap.org/img/w/' + searchResults.weather[0].icon + ".png")
  })
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.pressHere').addEventListener('click', WeatherAPI)