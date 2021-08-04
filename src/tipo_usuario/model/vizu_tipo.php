<?php

    include('../../conexao/conn.php');

    $IDTIPO_USUARIO = $_REQUEST['IDTIPO_USUARIO'];
    $sql = "SELECT * FROM TIPO_USUARIO WHERE IDTIPO_USUARIO = $IDTIPO_USUARIO";

    $resultado = $pdo->query($sql);
    if($resultado){
        $dadosTipo = array();
        while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
            $dadosTipo = array_map('utf8_encode', $row);
        }
        $dados = array(
            'tipo' => 'success',
            'mensagem' => '',
            'dados' => $dadosTipo
        );
    } else {
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Ocorreu um erro, não foi possivel encontrar o tipo de usuario cadastrado',
            'dados' => array()
        );
    }

    echo json_encode($dados);