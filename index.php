<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yandex - a fast Internet search</title>
</head>
<?php 
  $links = [];

  for ($i=1; $i < 28; $i++) { 
    $links[] = "./task{$i}/index.php";

  }
?>
  <body>
    <main>
      <?php 
        foreach ($links as $index => $link) {
          $num = $index + 1;
         echo "<a href='$link'>task $num</a><br>";
        }
      ?>
    </main>
  </body>
</html>