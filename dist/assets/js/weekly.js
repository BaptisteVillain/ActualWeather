'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForecastWeather = function () {
    function ForecastWeather(el) {
        _classCallCheck(this, ForecastWeather);

        this.el = el;
        this.data = data;
        this.days_el = this.el.querySelectorAll('.day-container');
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
        this.el = forecastWeather.days_el[this.index];
    }

    _createClass(Day, [{
        key: 'drawTemp',
        value: function drawTemp() {
            this.el_temp = document.createElement('div');
            this.el_temp.className = 'temp-point';
            this.el_temp.style.transform = 'translateY(' + this.data.temp.day + ')';
            this.el.appendChild(this.el_temp);
        }
    }]);

    return Day;
}();

var forecastWeather = new ForecastWeather(document.querySelector('.forecast-data-visualisation'));
console.log(undefined.days_el);
// console.log(data[0].temp.day)