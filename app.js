

const searchForm = document.querySelector('.search-form')
const search = document.querySelector('.search')
const cityName = document.querySelector('.city-name')
const currentDegree = document.querySelector('.current-degree')
const currentWeather = document.querySelector('.current-weather')
const min = document.querySelector('.min')
const max = document.querySelector('.max')
const overlay =document.querySelector('.overlay')

const api = {
    key: '467143a2e9e1de3de89328bf80dd0625',
    base: 'https://api.openweathermap.org/data/2.5/',
  }

searchForm.addEventListener('submit', async (e) =>{
  e.preventDefault()
  const nameCity = search.value
  overlay.classList.remove('hidden')
  const fetchdata = await fetch(
    `${api.base}weather?q=${nameCity}&units=metric&appid=${api.key}`,
    )
    
  const data = await fetchdata.json()
  getWeather(data)
  overlay.classList.add('hidden')
  // .then((data) =>{
    //   return  data.json()
    })
    





    function getWeather(data){
      console.log(data);
      cityName.textContent = `${data.name}, ${data.sys.country}`
      currentDegree.textContent = `${Math.round(data.main.temp)}C`
      currentWeather.textContent = `${data.weather[0].main}`
      max.textContent = `${Math.round(data.main.temp_max)}C`
      min.textContent  = `${Math.round(data.main.temp_min)}C`
    }

