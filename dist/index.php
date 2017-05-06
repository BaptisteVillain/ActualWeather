<?php


// $city = file_get_contents('http://api.wunderground.com/api/846302b684d9027f/geolookup/q/autoip.json');
// $city = json_decode($city);

// $weather = file_get_contents('http://api.wunderground.com/api/846302b684d9027f/hourly/q/' . $city->location->country .'/'. $city->location->city .'.json');



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
    <header class="header"></header>
    <div class="fluid-container">
      <section class="weather-actual">
        <div class="actual-data-visualisation">
          
        </div>        
      </section> 
    </div>
    <script src="data/data.json"></script>
    <!--<script> const data = </script>-->
    <script src="assets/js/app.min.js"></script>
  </body>
</html>