    <script>
      const data = <?= json_encode($weather_forecast->list); ?>
    </script>
    <script src="assets/js/<?= $page ?>.min.js"></script>
  </body>
</html>  