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
      require_once "recebedor.php"; //once -> importa o arquivo so uma vez
    ?>
    <hr>
    <form method = "Post">
        E-mail:<br>
        <input type = "text" name = "email"><br><br>

        <input type = "submit" value = "Enviar dados"><br><br>
    </form> 
</body>
</html>