'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HourPoint = function () {
    function HourPoint(data, index) {
        _classCallCheck(this, HourPoint);

        this.data = data;
        this.date = new Date(this.data.dt * 1000);
        this.index = index;
        this.el = document.createElement('div');
        this.draw();
    }

    _createClass(HourPoint, [{
        key: 'draw',
        value: function draw() {
            this.el.className = this.index == 0 ? 'hour-point active' : 'hour-point';
            this.el.style.transform = 'translateX(' + (actual_weather.width / 2 + actual_weather.data_width / 2 * Math.cos(this.index * 2 * Math.PI / 24)) + 'px)';
            this.el.style.transform += ' translateY(' + (actual_weather.width / 2 + actual_weather.data_width / 2 * Math.sin(this.index * 2 * Math.PI / 24)) + 'px)';
            actual_weather.el.appendChild(this.el);
        }
    }]);

    return HourPoint;
}();

var PrecipitationLine = function () {
    function PrecipitationLine(value, index) {
        _classCallCheck(this, PrecipitationLine);

        this.data = value;
        this.date = new Date(this.data.dt * 1000);
        this.index = index;
        this.el_container = document.createElement('div');
        this.el_line = document.createElement('div');
        this.el_text_line = document.createElement('div');
        this.el_text_temp = document.createElement('div');
        this.el_text_hour = document.createElement('div');
        this.draw();
    }

    _createClass(PrecipitationLine, [{
        key: 'draw',
        value: function draw() {
            this.el_container.className = this.index == 0 ? 'precipitation-line active' : 'precipitation-line';
            this.el_container.style.transform = 'translateX(' + (actual_weather.width / 2 + actual_weather.data_width / 2 * Math.cos(this.index * 2 * Math.PI / 24)) + 'px)';
            this.el_container.style.transform += ' translateY(' + (actual_weather.width / 2 + actual_weather.data_width / 2 * Math.sin(this.index * 2 * Math.PI / 24)) + 'px)';
            this.el_container.style.transform += ' rotate(' + (360 / 24 * this.index + 90) + 'deg)';
            actual_weather.el.appendChild(this.el_container);

            this.el_line.className = 'line';
            this.el_line.style.transform = ' scaleY(' + this.data.main.humidity / 100 + ')';
            this.el_container.appendChild(this.el_line);

            this.el_text_line.className = 'text-line';
            this.el_text_line.style.top = this.el_container.offsetHeight * (this.data.main.humidity / 100) + 'px';
            this.el_text_line.textContent = this.data.main.humidity + '%';
            this.el_container.appendChild(this.el_text_line);

            this.el_text_hour.className = 'text-hour';
            this.el_text_hour.textContent = this.date.getHours() + 'H';
            this.el_container.appendChild(this.el_text_hour);

            this.el_text_temp.className = 'text-temp';
            this.el_text_temp.textContent = this.data.main.temp + '°C';
            this.el_container.appendChild(this.el_text_temp);
        }
    }]);

    return PrecipitationLine;
}();

var ActualWeather = function () {
    function ActualWeather(el) {
        _classCallCheck(this, ActualWeather);

        this.el = el;
        // this.el.style.transform = 'rotate(-'+ ((15*data[0].dt) - 30) +'deg)'
        this.width = el.offsetWidth;
        this.height = el.offsetHeight;
        this.data_width = this.width * 0.95;
        this.hour_points = [];
        this.precipitation_lines = [];
        this.container_circle_line = this.el.querySelector('svg.circle-line');
        this.initSvg(this.container_circle_line);
    }

    _createClass(ActualWeather, [{
        key: 'initSvg',
        value: function initSvg(node) {
            node.setAttribute('width', this.width);
            node.setAttribute('height', this.height);
            this.circle_line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            var x1 = this.width / 2 + this.data_width / 2 * Math.cos(23.5 * 2 * Math.PI / 24);
            var y1 = this.width / 2 + this.data_width / 2 * Math.sin(23.5 * 2 * Math.PI / 24);

            var x2 = this.width / 2 + this.data_width / 2 * Math.cos(22.5 * 2 * Math.PI / 24);
            var y2 = this.width / 2 + this.data_width / 2 * Math.sin(22.5 * 2 * Math.PI / 24);
            this.path = 'M' + x1 + ' ' + y1 + ' A ' + this.data_width / 2 + ' ' + this.data_width / 2 + ', 0, 1, 1, ' + x2 + ' ' + y2;
            this.circle_line.setAttribute('d', this.path);
            this.container_circle_line.appendChild(this.circle_line);
        }
    }, {
        key: 'draw',
        value: function draw() {
            for (var i = 0; i < 8; i++) {
                this.hour_points.push(new HourPoint(data[i * 3], i * 3));
                this.precipitation_lines.push(new PrecipitationLine(data[i * 3], i * 3));
            }
        }
    }]);

    return ActualWeather;
}();

console.log(data);

var actual_weather = new ActualWeather(document.querySelector('.circle-hour'));
actual_weather.draw();

function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}
// download(JSON.stringify(data), 'data.json', 'json');

console.log(data);