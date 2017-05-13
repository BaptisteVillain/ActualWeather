<?php
session_start();

if(isset($_SESSION['last-positions'])){
    $last_positions = $_SESSION['last-positions'];
    $positions = $last_positions;
    if($location->city != reset($positions)){
        array_unshift($positions, $location->city);        
    }
}
else{
    $error_session = 'Make your first research !';
    $positions = Array($location->city);
}

$_SESSION['last-positions'] = $positions;