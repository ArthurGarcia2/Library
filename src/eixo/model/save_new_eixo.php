<?php

    include('../../conexao/conn.php');

    $requestData = $_REQUEST;

    if(empty($requestData['NOME'])){
        $retorno = array(
            "tipo" => "error",
            "mensagem" => "Você tem que preencher todos os campos."
        );

    }else{
        $IDEIXO = isset($requestData['IDEIXO']) ? $requestData['IDEIXO'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        if($operacao == 'insert'){
            try {
                $stmt = $pdo->prepare('INSERT INTO EIXO (NOME) VALUES (:nome)');
                $stmt -> execute(array(
                    ':nome' => utf8_decode($requestData['NOME'])
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
                $stmt = $pdo->prepare('UPDATE EIXO SET NOME = :nome WHERE IDEIXO = :id');
                $stmt -> execute(array(
                    ':id' => $IDEIXO,
                    ':nome' => utf8_decode($requestData['NOME'])
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