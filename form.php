<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Design e Multimédia </title>
    <link rel="stylesheet" href="CSS/geral.css">
  </head>
  
  <body>
    <h1> You submitted the following information: </h1>
    <?php

    $filename = 'data.txt';

    $name = $_GET['nome'];
    $age = $_GET['idade'];
    $email = $_GET['email'];
    $opinion = $_GET['opiniao'];
    $question = $_GET['duvida'];

    echo "Name is: " . $name . '<br>';
    echo "Your age is: " . $age . '<br>';
    echo "Your email is: " . $email . '<br>';
    echo "Your opinion is: " . $opinion . '<br>';
    echo "Your question is: " . $question . '<br>';
    
    $write = $name . ',' . $age . ',' . $email . ',' . $opinion . ',' . $question . "\n";

    file_put_contents($filename, $write, FILE_APPEND);
    ?>
  </body>
</html>