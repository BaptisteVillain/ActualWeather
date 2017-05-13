<div class="fluid-container">
  <section class="weather-container">
    <div class="blurred-image-background">
      <img src="<?= $photo->urls->full ?>" alt="background city image">
    </div>
    <div class="container forecast-data-visualisation">
      <div class="row">
        <svg xmlns="http://www.w3.org/2000/svg" class="weather-svg hidden-xs"></svg>
        <?php foreach ($weather_forecast->list as $key => $_day):?>
          <div class="col-sm-2 day-container">
            <h3><span class="date-str"><?= date('D',$_day->dt) ?></span>. <span class="date-nbr"><?= date('d',$_day->dt) ?></span></h3>
            <div class="weather-icon">
              <img src="assets/img/weather-icons/<?= $_day->weather[0]->icon ?>.svg"></img>
            </div>
          </div>
        <?php endforeach ?>
      </div>
    </div>
  </section>
