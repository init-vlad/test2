<?php 
require("db.php");
$db = new Photos\DB();
$data = $db->get_all_photos()
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Практ 9</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="media.css">
</head>
<body>
    <header>
        <nav>
            <div class="desktop-links">
                <a href="#">Главная</a>
                <a class="photo-btn" href="#">Фото</a>
                <a href="#">Посты</a>
                <a href="#">Личный кабинет</a>
            </div>
            
            <div class="mobile_icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <div class="popup">
                <div class="mobile-links">
                    <a href="#">Главная</a>
                    <a href="#" class="photo-btn">Фото</a>
                    <a href="#">Посты</a>
                    <a href="#">Личный кабинет</a>
                </div >
            </div>
        </nav>




    </header>
    <h1>Галерея</h1>
    <div id="grid">
        <?php foreach ($data as $photo) { ?>
            <div class="photo">
                <img src="../assets/<?= $photo["image"] ?>" alt="">
                <p><?= $photo["text"] ?></p>
            </div>
        <?php } ?>
    </div>

    <form class="add-post-form">
        <div>
            <input type="text" name="picture" placeholder="Picture" required>
            <input type="text" name="capture" placeholder="Capture">
            <div class="btns">
                <button class="submit-btn" type="submit">Submit</button>
                <button class="close-btn">Close</button>
            </div>
        </div>
    </form>

    <div class="photo-popup">
        <img src="" alt="">
    </div>

    <script src="./script.js"></script>
</body>
</html>
