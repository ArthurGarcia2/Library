<?php

    include('../../conexao/conn.php');

    $nome = $_REQUEST['NOME'];

    $dados = array();

    $sql = "SELECT * FROM USUARIO WHERE NOME LIKE '%$nome%' ORDER BY NOME DESC";

    $result = $pdo->query($sql);

    if ($result) {
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $dados[] = array_map('utf8_encode', $row);
        }
    }

    echo json_encode($dados);