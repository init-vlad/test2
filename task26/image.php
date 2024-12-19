<?php 
  require("vendor/autoload.php");
  session_start();
  $user_id = $_SESSION["user_id"] ?? false;
  $photo_id = intval($_GET["id"]);
  
  $db = new Photos\DB();
  $photo = $db->get_photo_by_id($photo_id);
  $comments = $db->get_photo_comments($photo_id);
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
  <?php include "header.php"; ?>
  <div id="image">

    <img src="<?php echo $photo["image"]; ?>" alt="">
    <h1><?php echo $photo["text"]; ?></h1>
    <p><?php echo $photo["tags"]; ?></p>
    <div class="comments">
      <div class="form">
        <textarea id="text" rows="5"></textarea>
        <button id="add_comment">Добавить</button>
      </div>
      <h2>Комментарии</h2>
      <?php 
        if ($comments) {
          foreach ($comments as $comment) { ?>
            <div class='comment'>
              <p class='author'><?php echo $comment["author"]; ?></p>
              <p class='text'><?php echo $comment["text"]; ?></p>
              <p class='date'><?php echo $comment["created_at"]; ?></p>
            </div>
          <?php }
        }
      ?>
    </div>
  </div>
  <script src="image.js"></script>
</body>
</html>