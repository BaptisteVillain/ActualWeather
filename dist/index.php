<?php

include 'components/includes/config.php';
include 'components/classes/Weather.php';
include 'components/classes/Location.php';
include 'components/classes/Routing.php';

$routing = new Routing($q);
$page = $routing->getPage();

$location = new Location(USP_KEY, USP_SCT);

$weather = new Weather($location->city, OWM_KEY);
$weather_current  = $weather->getCurrent();
$weather_forecast = $page == 'daily' ? $weather->getForecastHour() : $weather->getForecastDaily();

include 'components/includes/session.php';

$photo = $location->getPhoto();
$photo = $photo->results[0];

// echo '<pre>';
// print_r($photo->user);
// echo '</pre>';

include 'components/views/partials/header.php';
include 'components/views/pages/'.$page.'.php';
include 'components/views/partials/sidebar-positions.php';
include 'components/views/partials/footer.php';


?>

