<?php
/*
-APACHE RECECE A REQUISIÇÃO
-MANDA PRO LOCAL CORRETO

-CHAMA O PHP PARA INTERPRETAR O CODIGO PHP
-O PHP MANDA O RESULTADO PARA O APACHE
-O APACHE JUNTA COM O QUE NÃO É INTERPRETÁVEL E MANDA PARA O USUARIO.

*/

$x = 10; //number
echo $x + 2;

$numero = 20; //number - inteiro
$usuario = 'Elvis'; //string
$dormindo = true; //false - boolean
$vazia = null; // vazio
$indefinido = ''; // indefinido 

//MESCLANDO VARIAVEIS 

$nome = ' Elvis';
$sobrenome = 'Souza';
$idade = 33;

$frase = "$nome $sobrenome tem $idade anos"; // .= += *= /=

echo $frase;

?>