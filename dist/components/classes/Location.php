<?php

class Location{
    public function __construct($key, $secret){
        $this->key    = $key;
        $this->secret = $secret;

        $this->requestTest();
    }

    private function requestTest(){
        if(!empty($_GET['city'])){
            $this->city = ucfirst((string)$_GET['city']);
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
        
        return ucfirst((string)$location->city);
    }

    public function getPhoto(){
        $data  = file_get_contents('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key='.$this->key.'&tags='.$this->city.'&per_page=1');
        
        $data = new SimpleXMLElement($data);

        $farm_id = $data->photos->photo['farm'];
        $server_id = $data->photos->photo['server'];
        $id = $data->photos->photo['id'];
        $secret = $data->photos->photo['secret'];

        $image = 'https://farm'.$farm_id.'.staticflickr.com/'.$server_id.'/'.$id.'_'.$secret.'.jpg';

        return $image;        
    }
}