<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
if (isset($_SESSION["users_id"])) {
    $users_id = $_SESSION["users_id"];
} else {
    $users_id = false;
}
require "vendor/autoload.php";
$db = new Photos\DB();
$data = $db->get_all_photos();
$data 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="media.css">
</head>
<body>
 <?php
 include "header.php"
 ?>
    <h1>Галерея</h1>
    <div id="grid">
        <?php if (!empty($data)): ?>
            <?php foreach ($data as $photo): ?>
                <?php echo (new Photos\Photo($photo["image"], $photo["text"]))->get_html(); ?>
            <?php endforeach; ?>
        <?php else: ?>
            <p>Галерея пуста.</p>
        <?php endif; ?>
    </div>
    <?php
    include "add_form.php";
    ?>
    <div id="popup_photo">
        <img src="" alt="Photo Popup">
    </div>
    <script src="./script.js"></script>
</body>
</html>
