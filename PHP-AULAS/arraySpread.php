<?php

$bolo1 = [
    'ovo', 
    'leite', 
    'açucar', 
    'farinha de trigo',
    'fermento em pó'
];

$bolo2 = [
   'vasilha',
   ...$bolo1,
   'corante',
   'creme de leite'
];

echo $bolo2[6];

print_r($bolo2); // Mostrar detalhado


?>