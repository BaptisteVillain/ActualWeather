<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><?= ucfirst($page)?> Weather</title>
     <!--Links -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <header class="header">
      <h1 class="title col-xs-2">Weather</h1>
      <div class="col-xs-2 col-xs-offset-2 link <?= $page == 'daily' ? 'active' : '' ?> "><a href="daily?city=<?= $location->city ?>" title="daily weather">daily</a></div>
      <div class="col-xs-2 link <?= $page == 'weekly' ? 'active' : '' ?>"><a href="weekly?city=<?= $location->city ?>" title="weekly weather">weekly</a></div>
      <div class="col-xs-12 col-sm-offset-1 col-sm-3  search-bar">
        <div class="col-xs-3 city-select-img">
          <img src="assets/img/city-pin.svg" alt="city"/>
        </div>
        <form action="#" method="get">
            <div class="col-xs-7 city-select">
                <input type="text" placeholder="city" name="city" value="<?= $location->city ?>">
            </div>
            <div class="col-xs-2 city-select-search">
            <button type="submit">
                <img src="assets/img/search.svg" alt="search icon">
            </button>
            </div>
        </form>
      </div>
    </header>