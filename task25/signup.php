<?php
require "vendor/autoload.php";

// echo $_POST;
var_dump($_POST);

    if(isset($_POST["login"],$_POST["password"])){
        $db = new \Photos\DB();
        var_dump(123); 
        $login_exist = $db->check_login($_POST["login"]);

        if($login_exist){
            header("Location: user.php?sign_error=login");

        }
        else{
            $db->new_user($_POST["login"],$_POST["password"]);
            header("Location: user.php?sign_success=ok ");
        }
    };