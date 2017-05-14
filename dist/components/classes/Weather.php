<?php

    class Weather{

        public function __construct($location, $key){
            $this->location  =$location;
            $this->key      = $key;
        }

        // GET CURRENT WEATHER
        public function getCurrent(){
            $path = './cache/weather/current/' . hash('sha256', $this->location.date('Y-m-d-H'));
            if(file_exists($path)){
                $data = file_get_contents($path);
            }
            else{
                $data = file_get_contents('http://api.openweathermap.org/data/2.5/weather?q=.'.$this->location.'&type=accurate&units=metric&APPID='.$this->key);            
                file_put_contents($path, $data);
            }
            return json_decode($data);
        }

        // GET HOURLY FORECAST WEATHER       
        public function getForecastHour(){
            $path = './cache/weather/hourly/' . hash('sha256', $this->location.date('Y-m-d-H'));
            if(file_exists($path)){
                $data = file_get_contents($path);
            }
            else{
                $data = file_get_contents('http://api.openweathermap.org/data/2.5/forecast?q=.'.$this->location.'&type=accurate&units=metric&APPID='.$this->key);
                file_put_contents($path, $data);
            }
            return json_decode($data);
        }

        // GET DAILY FORECAST WEATHER
        public function getForecastDaily(){
            $path = './cache/weather/daily/' . hash('sha256', $this->location.date('Y-m-d-H'));
            if(file_exists($path)){
                $data = file_get_contents($path);
            }
            else{
                $data = file_get_contents('http://api.openweathermap.org/data/2.5/forecast/daily?q=.'.$this->location.'&type=accurate&units=metric&cnt=6&APPID='.$this->key);                
                file_put_contents($path, $data);
            }
            return json_decode($data);
        }
    }