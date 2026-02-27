<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>УЧИМ PHP </title>
</head>
<body>
   <?php 
     include 'output-cycle.php';
   ?>
   

   <?php DoText('p','Первая часть'); ?>
   <?php DoText('p', 'Вторая часть'); ?>

   <?php DoText('p', 'Вторая часть', 5) ?>

   <?php  include 'counter-even.php' ?>



</body>
</html>

