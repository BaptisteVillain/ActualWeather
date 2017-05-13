'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForecastWeather = function () {
    function ForecastWeather(el) {
        _classCallCheck(this, ForecastWeather);

        this.el = el;
        this.data = data;
        this.days = [];

        this.draw();
    }

    _createClass(ForecastWeather, [{
        key: 'draw',
        value: function draw() {
            for (var i = 0; i < this.data.length; i++) {
                this.days.push(new Day(this.data[i], i));
            }
        }
    }]);

    return ForecastWeather;
}();

var Day = function () {
    function Day(data, index) {
        _classCallCheck(this, Day);

        this.data = data;
        this.index = index;
        this.el = document.querySelectorAll('.day-container');
        this.el = this.el[index];

        this.drawTemp();
        this.drawHum();
    }

    _createClass(Day, [{
        key: 'drawTemp',
        value: function drawTemp() {
            this.el_temp = document.createElement('div');
            this.el_temp.className = 'temp-point';
            this.el_temp.style.transform = 'translateY(' + this.data.temp.max * 5 * -1 + 'px)';
            this.el.appendChild(this.el_temp);

            this.text_container = document.createElement('div');
            this.text_container.className = 'temp-text';
            this.el_temp.appendChild(this.text_container);

            this.text_min = document.createElement('span');
            this.text_min.className = 'min';
            this.text_min.textContent = Math.round(this.data.temp.min, 1) + '°';
            this.text_container.appendChild(this.text_min);

            this.text_max = document.createElement('span');
            this.text_max.className = 'max';
            this.text_max.textContent = Math.round(this.data.temp.max, 1) + '°';
            this.text_container.appendChild(this.text_max);
        }
    }, {
        key: 'drawHum',
        value: function drawHum() {
            this.el_hum = document.createElement('div');
            this.el_hum.className = 'hum-point';
            this.el_hum.style.transform = 'translateY(' + this.data.clouds * 1.7 * -1 + 'px)';
            this.el.appendChild(this.el_hum);

            this.text_hum = document.createElement('div');
            this.text_hum.className = 'hum-text';
            this.text_hum.textContent = this.data.clouds + '%';
            this.el_hum.appendChild(this.text_hum);
        }
    }]);

    return Day;
}();

var WeatherSvg = function () {
    function WeatherSvg(el, data) {
        _classCallCheck(this, WeatherSvg);

        this.data = data;
        this.el_container = el;
        this.el_container_pos = this.el_container.parentNode.getBoundingClientRect();
        this.svgInit();
        this.drawTemp();
        this.drawHum();
    }

    _createClass(WeatherSvg, [{
        key: 'svgInit',
        value: function svgInit() {
            this.el_container.setAttribute('width', this.el_container_pos.width);
            this.el_container.setAttribute('height', this.el_container_pos.height);
        }
    }, {
        key: 'drawTemp',
        value: function drawTemp() {
            this.el_temp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            this.path_temp = 'M';
            for (var i = 0; i < this.data.length; i++) {
                if (i != 0) {
                    this.path_temp += ' L';
                }
                this.path_temp += forecastWeather.days[i].el_temp.getBoundingClientRect().left - this.el_container_pos.left + 5 + ',' + (forecastWeather.days[i].el_temp.getBoundingClientRect().top - this.el_container_pos.top + 5);
            }

            this.el_temp.setAttribute('d', this.path_temp);
            this.el_temp.setAttribute('class', 'temp-line');
            this.el_container.appendChild(this.el_temp);
        }
    }, {
        key: 'drawHum',
        value: function drawHum() {
            this.el_hum = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            this.path_hum = '';
            for (var i = 0; i < this.data.length; i++) {
                if (i == 0) {
                    this.path_hum += 'M' + (forecastWeather.days[i].el_hum.getBoundingClientRect().left - this.el_container_pos.left + 3) + ',' + (this.el_container_pos.height - 30 - 3);
                    this.path_hum += ' L' + (forecastWeather.days[i].el_hum.getBoundingClientRect().left - this.el_container_pos.left + 3) + ',' + (forecastWeather.days[i].el_hum.getBoundingClientRect().top - this.el_container_pos.top + 3);
                } else if (i == this.data.length - 1) {
                    this.path_hum += ' L' + (forecastWeather.days[i].el_hum.getBoundingClientRect().left - this.el_container_pos.left + 3) + ',' + (forecastWeather.days[i].el_hum.getBoundingClientRect().top - this.el_container_pos.top + 3);
                    this.path_hum += ' L' + (forecastWeather.days[i].el_hum.getBoundingClientRect().left - this.el_container_pos.left + 3) + ',' + (this.el_container_pos.height - 30 - 3);
                } else {
                    this.path_hum += ' L' + (forecastWeather.days[i].el_hum.getBoundingClientRect().left - this.el_container_pos.left + 3) + ',' + (forecastWeather.days[i].el_hum.getBoundingClientRect().top - this.el_container_pos.top + 3);
                }
            }

            this.path_hum += ' Z';

            this.el_hum.setAttribute('d', this.path_hum);
            this.el_hum.setAttribute('class', 'hum-line');
            this.el_container.appendChild(this.el_hum);
        }
    }]);

    return WeatherSvg;
}();

var forecastWeather = new ForecastWeather(document.querySelector('.forecast-data-visualisation'));
var tempLine = new WeatherSvg(document.querySelector('.weather-svg'), data);

console.log(data);