<?php

    include('../../conexao/conn.php');

    $requestData = $_REQUEST;

    if(empty($requestData)){
        $retorno = array(
            "tipo" => "error",
            "mensagem" => "Você tem que preencher todos os campos."
        );

    }else{
        $IDUSUARIO = isset($requestData['IDUSUARIO']) ? $requestData['IDUSUARIO'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        if($operacao == 'insert'){
            try {
                $stmt = $pdo->prepare('INSERT INTO USUARIO (NOME, EMAIL, SENHA, TIPO_USUARIO_IDTIPO_USUARIO, CURSO_IDCURSO) VALUES (:a, :b, :c, :d, :e)');
                $stmt -> execute(array(
                    ':a' => utf8_decode($requestData['NOME']),
                    ':b' => utf8_decode($requestData['EMAIL']),
                    ':c' => md5($requestData['SENHA']),
                    ':d' => $requestData['TIPO_USUARIO_IDTIPO_USUARIO'],
                    ':e' => $requestData['CURSO_IDCURSO'],
                ));
                $retorno = array(
                    "tipo" => "success",
                    "mensagem" => "Cadastrado criado com sucesso."
                );
            } catch (PDOException $e) {
                $retorno = array(
                    "tipo" => "error",
                    "mensagem" => "Ocorreu um erro. Cadastro não criado.".$e
                );
            }

        }else {
            try {
                $stmt = $pdo->prepare('UPDATE USUARIO SET NOME = :a, EMAIL = :b, SENHA = :c, TIPO_USUARIO_IDTIPO_USUARIO = :d, CURSO_IDCURSO = :e WHERE IDUSUARIO = :id');
                $stmt -> execute(array(
                    ':id' => $IDUSUARIO,
                    ':a' => utf8_decode($requestData['NOME']),
                    ':b' => utf8_decode($requestData['EMAIL']),
                    ':c' => md5($requestData['SENHA']),
                    ':d' => $requestData['TIPO_USUARIO_IDTIPO_USUARIO'],
                    ':e' => $requestData['CURSO_IDCURSO'],
                ));
                $retorno = array(
                    "tipo" => "success",
                    "mensagem" => "Cadastro atualizado com sucesso."
                );
            } catch (PDOException $e) {
                $retorno = array(
                    "tipo" => "error",
                    "mensagem" => "Ocorreu um erro. Cadastro não atualizado.".$e
                );
            }
        }
    }

    echo json_encode($retorno);