<?php

    include('../../conexao/conn.php');

    $IDUSUARIO = $_REQUEST['IDUSUARIO'];
    $sql = "SELECT * FROM USUARIO WHERE IDUSUARIO = $IDUSUARIO";

    $resultado = $pdo->query($sql);
    if($resultado){
        $dadosUsuario = array();
        while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
            $dadosUsuario = array_map('utf8_encode', $row);
        }
        $dados = array(
            'tipo' => 'success',
            'mensagem' => '',
            'dados' => $dadosUsuario
        );
    } else {
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Ocorreu um erro, não foi possivel encontrar o usuario cadastrado',
            'dados' => array()
        );
    }

    echo json_encode($dados);