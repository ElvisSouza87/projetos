<?php

$lista = [
    'nome' => 'Elvis',
    'idade' => 33,
    'atributos' => [
        'força' => 60,
        'agilidade' => 80,
        'destreza' => 50
    ],
    'vida' => 1000,
    'mana' => 928
];

echo "NOME: ".$lista['nome']."<br/><hr>";
echo "FORÇA: ".$lista['atributos'] ['força']."<br/><hr>";
echo "VIDA: ".$lista['vida']."<br/>";

?>