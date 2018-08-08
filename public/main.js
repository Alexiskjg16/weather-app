const KEY = '6637f2114ed7b6f45315bca3c1f53658'

class Temperature {
   constructor (temperature) {
   this.temperature = temperature
   }
  
   render () {

     const Li = document.createElement('li')

     const _temp = document.createElement('h4')
     _temp.textContent = this.temperature + "°F"
     Li.appendChild(_temp)
     return Li
    }
  }

class Forecast {
  constructor (forecast) {
    this.forecast = forecast
  }

  render () {

    const Li = document.createElement('li')

    const _forecast = document.createElement('h4')
    _forecast.textContent = this.forecast
    Li.appendChild(_forecast)
    return Li
  }

  renderTwo () {
    const IMG = document.createElement('img')
    const _icon = document.createElement('img')
    // _icon.setAttribute = this.forecast
    console.log(this.forecast)
    _icon.setAttribute('src', this.forecast)
    IMG.appendChild(_icon)
    return IMG
  }
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

    const _high = new Temperature(searchResults.main.temp_max)
    const _low = new Temperature(searchResults.main.temp_min)
    const _forec = new Forecast(searchResults.weather[0].main)
    const _fIcon = new Forecast('http://openweathermap.org/img/w/' + searchResults.weather[0].icon + ".png")

    document.querySelector('.weatherResults').appendChild(_high.render())
    document.querySelector('.weatherLow').appendChild(_low.render())
    document.querySelector('.weatherRainResults').appendChild(_forec.render())
    document.querySelector('.weathericon').appendChild(_fIcon.renderTwo())
  })
}
document.querySelector('.pressHere').addEventListener('click', WeatherAPI)