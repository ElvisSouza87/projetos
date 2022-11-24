<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplos Arquivos</title>
</head>
<body>
    <?php
      if(isset($_POST['nome'])) {

        $nome = $_POST['nome'];
        file_put_contents("teste.txt", $nome.PHP_EOL, FILE_APPEND ); // criar um arquivo é escrever dentro dele
      
        header("Location: antiF5.php");
    }
    ?>
    <hr>
    <form method = "Post">
        E-mail:<br>
        <input type = "text" name = "nome"><br><br>

        <input type = "submit" value = "Enviar dados"><br><br>
    </form> 
</body>
</html>