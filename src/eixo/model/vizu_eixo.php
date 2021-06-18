<?php

    include('../../conexao/conn.php');

    $IDEIXO = $_REQUEST['IDEIXO'];
    $sql = "SELECT * FROM EIXO WHERE IDEIXO = $IDEIXO";

    $resultado = $pdo->query($sql);
    if($resultado){
        $dadosEixo = array();
        while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
            $dadosEixo = array_map('utf8_encode', $row);
        }
        $dados = array(
            'tipo' => 'success',
            'mensagem' => '',
            'dados' => $dadosEixo
        );
    } else {
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Ocorreu um erro, não foi possivel encontrar o eixo cadastrado',
            'dados' => array()
        );
    }

    echo json_encode($dados);