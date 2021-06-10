<?php

    include('../../conexao/conn.php');

    $requestData = $_REQUEST;

    if(empty($requestData['DESCRICAO'])){
        $retorno = array(
            "tipo" => "error",
            "mensagem" => "Você tem que preencher todos os campos."
        );

    }else{
        $IDTIPO_USUARIO = isset($requestData['IDTIPO_USUARIO']) ? $requestData['IDTIPO_USUARIO'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        if($operacao == 'insert'){
            try {
                $stmt = $pdo->prepare('INSERT INTO TIPO_USUARIO (DESCRICAO) VALUES (:descricao)');
                $stmt -> execute(array(
                    ':descricao' => utf8_decode($requestData['DESCRICAO'])
                ));
                $retorno = array(
                    "tipo" => "success",
                    "mensagem" => "Cadastrado criado com sucesso."
                );
            } catch (PDOException $e) {
                $retorno = array(
                    "tipo" => "error",
                    "mensagem" => "Ocorreu um erro. Cadastro não criado."
                );
            }
        }else {
            try {
                $stmt = $pdo->prepare('UPDATE TIPO_USUARIO SET DESCRICAO = :descricao WHERE IDTIPO_USUARIO = :id');
                $stmt -> execute(array(
                    ':id' => $IDTIPO_USUARIO,
                    ':descricao' => utf8_decode($requestData['DESCRICAO'])
                ));
                $retorno = array(
                    "tipo" => "success",
                    "mensagem" => "Cadastro atualizado com sucesso."
                );
            } catch (PDOException $e) {
                $retorno = array(
                    "tipo" => "error",
                    "mensagem" => "Ocorreu um erro. Cadastro não atualizado."
                );
            }
        }
    }

    echo json_encode($retorno);