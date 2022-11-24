<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <?php
      if(isset($_POST['email']) && empty($_POST['email']) == false) {
        
        if (isset($_POST['senha']) && empty($_POST['senha']) == false) {

            $email = $_POST['email'];
            $senha = $_POST['senha'];
            echo "Meu email é:  ".$email." e minha senha é: ".$senha;

        }

         
      } 
    ?>
    <hr>
    <form method = "Post">
        E-mail:<br>
        <input type = "text" name = "email"><br><br>

        Senha:<br>
        <input type = "password" name = "senha"><br><br>

        <input type = "submit" value = "Enviar dados"><br><br>
    </form> 
</body>
</html>
   

