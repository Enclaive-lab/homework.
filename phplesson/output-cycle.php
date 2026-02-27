<?php 
 function DoText($tag , $content, $count = 1 ){
   echo "<$tag>$content</$tag>";

   for ($i= 0 ; $i < $count; $i++) { 
       echo "<$tag>$content</$tag>";
   }
 }

 ?>

