<?php

class Location{
    public function __construct($key, $secret){
        $this->key    = $key;
        $this->secret = $secret;

        $this->requestTest();
    }

    private function requestTest(){
        if(!empty($_GET['city'])){
            $this->city = ucfirst(strtolower((string)$_GET['city']));
        }
        else{
            $this->city = $this->getLocationByIP();
        }
    }

    private function getLocationByIP(){
        $ip = $_SERVER['REMOTE_ADDR']; // to use on server
        $ip = '92.169.177.106'; // test IP
        $location = file_get_contents('https://ipinfo.io/'.$ip);
        $location = json_decode($location);
        
        return ucfirst(strtolower((string)$location->city));
    }

    public function getPhoto(){
        $path = './cache/photo/' . hash('sha256', $this->city.date('Y-m'));
        if(file_exists($path)){
            $data = file_get_contents($path);
        }
        else{
            $data  = file_get_contents('https://api.unsplash.com/search/photos?page=1&client_id='.$this->key.'&query='.$this->city.'&per_page=1');
            file_put_contents($path, $data);                   
        }

        $data = json_decode($data);

        if(empty($data->results)){
            $data = file_get_contents('./cache/photo/default');
            $data = json_decode($data);
        }

        return $data;
        
    }
}