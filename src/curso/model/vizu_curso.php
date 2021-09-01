<?php

    include('../../conexao/conn.php');

    $IDCURSO = $_REQUEST['IDCURSO'];
    $sql = "SELECT * FROM CURSO WHERE IDCURSO = $IDCURSO";

    $resultado = $pdo->query($sql);
    if($resultado){
        $dadosCurso = array();
        while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
            $dadosCurso = array_map('utf8_encode', $row);
        }
        $dados = array(
            'tipo' => 'success',
            'mensagem' => '',
            'dados' => $dadosCurso
        );
    } else {
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Ocorreu um erro, não foi possivel encontrar o curso cadastrado',
            'dados' => array()
        );
    }

    echo json_encode($dados);