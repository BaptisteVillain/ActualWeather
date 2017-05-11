<?php

class Routing{
    public function __construct($query){
        $this->query = $query;
    }

    public function getPage(){
        switch($this->query){
            case '':
            return 'daily';
            break;

            case 'daily':
            return 'daily';
            break;

            case 'weekly':
            return 'weekly';
            break;

            default :
            return '404';
            break;
        }
    }
}