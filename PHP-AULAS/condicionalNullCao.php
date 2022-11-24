<?php

$nome ='Elvis';

$nomeCompleto = $nome;
//$nomeCompleto .= isset($sobrenome) ? $sobrenome : '';
$nomeCompleto .= $sobrenome ?? '';

echo $nomeCompleto;

?>
