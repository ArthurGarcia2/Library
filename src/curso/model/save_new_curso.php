<?php

    include('../../conexao/conn.php');

    $requestData = $_REQUEST;

    if(empty($requestData)){
        $retorno = array(
            "tipo" => "error",
            "mensagem" => "Você tem que preencher todos os campos."
        );

    }else{
        $IDCURSO = isset($requestData['IDCURSO']) ? $requestData['IDCURSO'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        if($operacao == 'insert'){
            try {
                $stmt = $pdo->prepare('INSERT INTO CURSO (NOME, EIXO_IDEIXO) VALUES (:a, :b)');
                $stmt -> execute(array(
                    ':a' => utf8_decode($requestData['NOME']),
                    ':b' => $requestData['EIXO_IDEIXO']
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
                $stmt = $pdo->prepare('UPDATE CURSO SET NOME = :a, EIXO_IDEIXO = :b WHERE IDCURSO = :id');
                $stmt -> execute(array(
                    ':id' => $IDCURSO,
                    ':a' => utf8_decode($requestData['NOME']),
                    ':b' => $requestData['EIXO_IDEIXO']
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