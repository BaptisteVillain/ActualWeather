class ForecastWeather{
    constructor(el){
        this.el      = el
        this.data    = data
        this.days_el = this.el.querySelectorAll('.day-container');
        this.days    = []

        this.draw()
    }
    draw(){
        for (let i = 0; i < this.data.length; i++) {
            this.days.push(new Day(this.data[i], i))
        }
    }
}

class Day{
    constructor(data, index){
        this.data  = data
        this.index = index
        this.el    = forecastWeather.days_el[this.index]
    }
    drawTemp(){
        this.el_temp                 = document.createElement('div')
        this.el_temp.className       = 'temp-point'
        this.el_temp.style.transform = 'translateY('+ this.data.temp.day +')'
        this.el.appendChild(this.el_temp)
    }
}

const forecastWeather = new ForecastWeather(document.querySelector('.forecast-data-visualisation'))
console.log(this.days_el)
// console.log(data[0].temp.day)