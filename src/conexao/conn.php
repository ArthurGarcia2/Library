<?php

    $hostmane = "fdb29.awardspace.net";
    $dbname = "3802844_library";
    $username = "3802844_library";
    $password = "FC*z,3#e7jDpQfgx";

    try {
        $pdo = new PDO('mysql:host='.$hostmane.';dbname='.$dbname, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo 'Conexão Bem Sucedida';
    } catch (PDOException $e) {
        echo 'Conexão Mal Sucedida, Erro: '.$e->getMessage();
    }
