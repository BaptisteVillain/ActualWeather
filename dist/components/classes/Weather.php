<?php

    class Weather{

        public function __construct($location, $key){
            $this->location  =$location;
            $this->key      = $key;
        }

        public function getCurrent(){
            $data = file_get_contents('http://api.openweathermap.org/data/2.5/weather?q=.'.$this->location.'&type=accurate&units=metric&APPID='.$this->key);            
            return json_decode($data);
        }

        public function getForecastHour(){
            $data = file_get_contents('http://api.openweathermap.org/data/2.5/forecast?q=.'.$this->location.'&type=accurate&units=metric&APPID='.$this->key);
            return json_decode($data);
        }

        public function getForecastDaily(){
            $data = file_get_contents('http://api.openweathermap.org/data/2.5/forecast/daily?q=.'.$this->location.'&type=accurate&units=metric&cnt=7&APPID='.$this->key);
            return json_decode($data);
        }
    }