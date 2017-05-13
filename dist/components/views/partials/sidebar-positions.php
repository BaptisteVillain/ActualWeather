<div class="sidebar-positions">
    <a href="#" class="button-sidebar button-close">
        <img src="assets/img/arrow-close.svg" alt="close sidebar">
    </a>
    <?php if(isset($last_positions)){
        foreach($last_positions  as $value):?>
            <a class="sidebar-list-item" href="<?= $page ?>?city=<?= $value ?>"><?= $value ?></a>
        <?php endforeach ;
    }
    ?>

    <p class="sidebar-list-empty"><?= isset($error_session) ? $error_session : '' ?></p>

</div>