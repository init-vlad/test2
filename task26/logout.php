<?php 
    session_start();
    unset($_SESSION["users_id"]);
    header("Location: index.php");