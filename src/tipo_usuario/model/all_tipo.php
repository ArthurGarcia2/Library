<?php

    include('../../conexao/conn.php');

    $dados = array();

    $sql = "SELECT * FROM TIPO_USUARIO ORDER BY DESCRICAO DESC";

    $result = $pdo->query($sql);

    if ($result) {
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $dados[] = array_map('utf8_encode', $row);
        }
    }

    echo json_encode($dados);