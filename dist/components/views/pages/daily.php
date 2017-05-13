<div class="fluid-container">
  <section class="weather-container">
    <div class="blurred-image-background">
      <img src="<?= $photo->urls->full ?>" alt="background city image">
    </div>
    <div class="actual-data-visualisation">
      <div class="date-transition"><?= date('D') .' <img src="assets/img/arrow.svg" title="arrow next day"> ' .date('D', time() + (24 * 60 * 60)) ?></div>
      <div class="current-hour">
        <div class="icon">
          <img src="assets/img/weather-icons/<?= $weather_current->weather[0]->icon ?>.svg" alt="weather icon">              
        </div>
        <div class="temp">
          <?= round($weather_current->main->temp, 1) ?>°C
        </div>
        <div class="date">
          <?= date('H:i') ?> </br>
          <?= intval(date('d')).' '.date('M') ?>
        </div>
      </div>
      <div class="circle-hour">
        <svg xmlns="http://www.w3.org/2000/svg" class="circle-line"></svg>  
      </div>
    </div>
  </section>