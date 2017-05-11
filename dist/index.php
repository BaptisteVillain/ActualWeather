<?php

include 'components/includes/config.php';
include 'components/classes/Weather.php';
include 'components/classes/Location.php';
include 'components/classes/Routing.php';

$routing = new Routing($q);
$page = $routing->getPage();

$location = new Location(FLK_KEY, FLK_SCT);

$weather = new Weather($location->city, OWM_KEY);
$weather_current  = $weather->getCurrent();
$weather_forecast = $page == 'daily' ? $weather->getForecastHour() : $weather->getForecastDaily();

include 'components/views/partials/header.php';
include 'components/views/pages/'.$page.'.php';
include 'components/views/partials/footer.php';


?>

