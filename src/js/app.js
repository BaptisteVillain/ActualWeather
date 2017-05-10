class HourPoint{
    constructor(data, index){
        this.data  = data
        this.hour  = data.FCTTIME.hour
        this.index = index
        this.el    = document.createElement('div')
        this.draw()
    }
    draw(){
        this.el.className = this.index == 0 ? 'hour-point active' : 'hour-point'
        this.el.style.transform = 'translateX('+ ((actual_weather.width)/2 + ((actual_weather.data_width)/2)*Math.cos(this.index * 2 * Math.PI / 24)) + 'px)'
        this.el.style.transform += ' translateY(' + ((actual_weather.width)/2 + ((actual_weather.data_width)/2)*Math.sin(this.index * 2 * Math.PI / 24)) + 'px)'
        actual_weather.el.appendChild(this.el)
    }
}

class PrecipitationLine{
    constructor(value, index){
        this.value = value
        this.index = index
        this.el_container = document.createElement('div')
        this.el_line      = document.createElement('div')        
        this.el_text_line = document.createElement('div')
        this.el_text_temp = document.createElement('div')
        this.el_text_hour = document.createElement('div')
        this.draw()
    }
    draw(){
        this.el_container.className = this.index == 0 ? 'precipitation-line active' : 'precipitation-line'
        this.el_container.style.transform = 'translateX('+ ((actual_weather.width)/2 + ((actual_weather.data_width)/2)*Math.cos(this.index * 2 * Math.PI / 24)) + 'px)'
        this.el_container.style.transform += ' translateY(' + ((actual_weather.width)/2 + ((actual_weather.data_width)/2)*Math.sin(this.index * 2 * Math.PI / 24)) + 'px)'
        this.el_container.style.transform += ' rotate('+ ((360/24) * this.index + 90) +'deg)'
        actual_weather.el.appendChild(this.el_container)

        this.el_line.className = 'line'
        this.el_line.style.transform = ' scaleY('+ this.value.sky/100 +')'
        this.el_container.appendChild(this.el_line)

        this.el_text_line.className = 'text-line'
        this.el_text_line.style.top = this.el_container.offsetHeight*(this.value.sky/100) + 'px'
        this.el_text_line.textContent = this.value.sky + '%'
        this.el_container.appendChild(this.el_text_line)

        this.el_text_hour.className = 'text-hour'
        this.el_text_hour.textContent = this.value.FCTTIME.hour + 'H'
        this.el_container.appendChild(this.el_text_hour)

        this.el_text_temp.className = 'text-temp'
        this.el_text_temp.textContent = this.value.temp.metric + '°C'
        this.el_container.appendChild(this.el_text_temp)
    }
}



class ActualWeather{
    constructor(el){
        this.el = el
        this.el.style.transform = 'rotate(-'+ ((15*data.hourly_forecast[0].FCTTIME.hour) - 30) +'deg)'
        this.width = el.offsetWidth
        this.height = el.offsetHeight
        this.data_width = this.width*0.95
        this.hour_points = []
        this.precipitation_lines = []
        this.container_circle_line = this.el.querySelector('svg.circle-line')
        this.initSvg(this.container_circle_line)
    }
    initSvg(node){
        node.setAttribute('width', this.width)
        node.setAttribute('height', this.height)
        this.circle_line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        let x1 = ((this.width)/2 + ((this.data_width)/2)*Math.cos(23.5 * 2 * Math.PI / 24))
        let y1 = ((this.width)/2 + ((this.data_width)/2)*Math.sin(23.5 * 2 * Math.PI / 24))

        let x2 = ((this.width)/2 + ((this.data_width)/2)*Math.cos(22.5 * 2 * Math.PI / 24))
        let y2 = ((this.width)/2 + ((this.data_width)/2)*Math.sin(22.5 * 2 * Math.PI / 24))
        this.path = 'M'+ x1 +' '+ y1 +' A '+ this.data_width/2 +' '+ this.data_width/2 +', 0, 1, 1, '+ x2 +' '+ y2
        this.circle_line.setAttribute('d', this.path)
        this.container_circle_line.appendChild(this.circle_line)
    }
    draw(){
        for (var i = 0; i < 12; i++) {
            this.hour_points.push(new HourPoint(data.hourly_forecast[i*2], i*2))
            this.precipitation_lines.push(new PrecipitationLine(data.hourly_forecast[i*2], i*2))
        }
    }
}

if(data.hourly_forecast[0].FCTTIME.hour%2 != 0){
    console.log(data.hourly_forecast[0].FCTTIME.hour)
    data.hourly_forecast.splice(0,1);
    console.log(data.hourly_forecast[0].FCTTIME.hour)    
}

const actual_weather = new ActualWeather(document.querySelector('.circle-hour'))
actual_weather.draw()


function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}
// download(JSON.stringify(data), 'data.json', 'json');

console.log(data)

