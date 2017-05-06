'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HourPoint = function () {
    function HourPoint(data, index) {
        _classCallCheck(this, HourPoint);

        this.data = data;
        this.hour = data.FCTTIME.hour;
        this.index = index;
        this.el = document.createElement('div');
        this.draw();
    }

    _createClass(HourPoint, [{
        key: 'draw',
        value: function draw() {
            this.el.className = 'hour-point';
            this.el.style.transform = 'translateX(' + (actual_weather.width / 2 + actual_weather.width / 2 * Math.cos(this.index * 2 * Math.PI / 24)) + 'px)';
            this.el.style.transform += ' translateY(' + (actual_weather.width / 2 + actual_weather.width / 2 * Math.sin(this.index * 2 * Math.PI / 24)) + 'px)';
            actual_weather.el.appendChild(this.el);
        }
    }]);

    return HourPoint;
}();

var PrecipitationLine = function () {
    function PrecipitationLine(value, index) {
        _classCallCheck(this, PrecipitationLine);

        this.value = value;
        this.index = index * 2;
        this.el_container = document.createElement('div');
        this.el_line = document.createElement('div');
        this.el_text_line = document.createElement('div');
        this.el_text_temp = document.createElement('div');
        this.draw();
    }

    _createClass(PrecipitationLine, [{
        key: 'draw',
        value: function draw() {
            this.el_container.className = 'precipitation-line';
            this.el_container.style.transform = 'translateX(' + (actual_weather.width / 2 + (actual_weather.width / 2 - 1) * Math.cos(this.index * 2 * Math.PI / 24)) + 'px)';
            this.el_container.style.transform += ' translateY(' + (actual_weather.width / 2 + (actual_weather.width / 2 - 1) * Math.sin(this.index * 2 * Math.PI / 24)) + 'px)';
            this.el_container.style.transform += ' rotate(' + (360 / 24 * this.index + 90) + 'deg)';
            actual_weather.el.appendChild(this.el_container);

            this.el_line.className = 'line';
            this.el_line.style.transform = ' scaleY(' + this.value.sky / 100 + ')';
            this.el_container.appendChild(this.el_line);

            this.el_text_line.className = 'text-line';
            this.el_text_line.style.top = 60 * (this.value.sky / 100) + 'px';
            this.el_text_line.textContent = this.value.sky + '%';
            this.el_container.appendChild(this.el_text_line);

            this.el_text_temp.className = 'text-temp';
            // this.el_text_temp.textContent = this.value.temp.metric + '°C'
            this.el_text_temp.textContent = this.value.FCTTIME.hour;
            this.el_container.appendChild(this.el_text_temp);
        }
    }]);

    return PrecipitationLine;
}();

var ActualWeather = function () {
    function ActualWeather(el) {
        _classCallCheck(this, ActualWeather);

        this.el = el;
        this.width = el.offsetWidth;
        this.height = el.offsetHeight;
        this.hour_points = [];
        this.precipitation_lines = [];
    }

    _createClass(ActualWeather, [{
        key: 'draw',
        value: function draw() {
            for (var i = 0; i < 24; i + 2) {
                this.hour_points.push(new HourPoint(data.hourly_forecast[i * 2], i));
                this.precipitation_lines.push(new PrecipitationLine(data.hourly_forecast[i], i));
            }
        }
    }]);

    return ActualWeather;
}();

var actual_weather = new ActualWeather(document.querySelector('.actual-data-visualisation'));
actual_weather.draw();