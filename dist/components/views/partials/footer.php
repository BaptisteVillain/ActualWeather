      <div class="button-positions">
        <a href="#" class="button-sidebar">last positions</a>
      </div>
      <div class="credit hidden-xs">
        < <a target="_blank" href="<?= $photo->user->links->html ?>"><?=$photo->user->name?></a> / <a target="_blank" href="http://unsplash.com?utm_source=weather_website&utm_medium=referral&utm_campaign=api-credit>">Unsplash</a> >
      </div>
    </div>
    <script>
      const data = <?= json_encode($weather_forecast->list); ?>
    </script>
    <script src="assets/js/main.min.js"></script>
    <script src="assets/js/<?= $page ?>.min.js"></script>
  </body>
</html>