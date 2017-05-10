<?php


// $city = file_get_contents('http://api.wunderground.com/api/846302b684d9027f/geolookup/q/autoip.json');
// $city = json_decode($city);

// $weather = file_get_contents('http://api.wunderground.com/api/846302b684d9027f/hourly/q/' . $city->location->country .'/'. $city->location->city .'.json');

$weather = file_get_contents('http://baptistevillain.fr/data/weather.json');

$weather = json_decode($weather);

$month_date  = date('m');
$month_date   = DateTime::createFromFormat('!m', $month_date);
$month_name = $month_date->format('F'); // March

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Weather</title>
     <!--Links -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <header class="header">
      <h1 class="title col-xs-2">Weather</h1>
      <div class="col-xs-2 col-xs-offset-2 link active"><a href="#" title="daily weather">daily</a></div>
      <div class="col-xs-2 link"><a href="#" title="weekly weather">weekly</a></div>
      <div class="col-xs-4 search-bar">
        <div class="col-xs-1 country-select-img">
          <img src="assets/img/country-select.svg" alt="country"/>
        </div>
        <div class="col-xs-4 country-select">
          <select>
            <?php include 'country.php' ?>
          </select>
        </div>
        <div class="col-xs-8 test"></div>
      </div>
    </header>
    <div class="fluid-container">
      <section class="weather-actual">
        <div class="actual-data-visualisation">
          <div class="date-transition"><?= intval(date('d')) .' <img src="assets/img/arrow.svg" title="arrow next day"> ' .(intval(date('d'))+1) ?></div>
          <div class="current-hour">
            <div class="icon">
              <img src="assets/img/weather-icons/day/<?= $weather->hourly_forecast[0]->icon ?>.svg" alt="weather icon">              
            </div>
            <div class="temp">
              <?= $weather->hourly_forecast[0]->temp->metric ?>°C
            </div>
            <div class="date">
              <?= date('H:i') ?> </br>
              <?= intval(date('d')).' '.$month_name ?>
            </div>
          </div>
          <div class="circle-hour">
            <svg xmlns="http://www.w3.org/2000/svg" class="circle-line"></svg>  
          </div>
        </div>
      </section>
    </div>
    <!--<script src="data/data.json"></script>-->
    <script>
      const data = <?= json_encode($weather); ?>
    </script>
    <script src="assets/js/app.min.js"></script>
  </body>
</html>