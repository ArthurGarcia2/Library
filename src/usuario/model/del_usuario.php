<?php
  include('../../conexao/conn.php');

  $IDUSUARIO = $_REQUEST['IDUSUARIO'];

  $sql = "DELETE FROM USUARIO WHERE IDUSUARIO = $IDUSUARIO";

  $resultado = $pdo->query($sql);
  if ($resultado) {
    $dados = array(
      'tipo' => 'success',
      'mensagem' => 'Item deletado corretamente',
      'titulo' => 'Ai Siim!'
    );
  }else{
    $dados = array(
      'tipo' => 'error',
      'mensagem' => 'Item não deletado',
      'titulo' => 'Deu Ruim!'
    );
  };

  echo json_encode($dados);
