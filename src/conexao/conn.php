<?php

    $hostmane = "sql101.epizy.com";
    $dbname = "epiz_29388338_library";
    $username = "epiz_29388338";
    $password = "2OkjKsvk6dH6";

    try {
        $pdo = new PDO('mysql:host='.$hostmane.';dbname='.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo 'Conexão Bem Sucedida';
    } catch (PDOException $e) {
        echo 'Conexão Mal Sucedida, Erro: '.$e->getMessage();
    }