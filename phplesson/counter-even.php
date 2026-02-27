<?php
 $array = [1, 2, 3,  4, 5, 6, 7, 8];
    
    echo '<br>';
   for ($i = 0 ; $i < count($array); $i++) { 
     if($array[$i] % 2 === 0){
      echo "$array[$i]" . "<br>";
     }
   }
