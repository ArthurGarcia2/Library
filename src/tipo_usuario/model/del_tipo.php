<?php
  include('../../conexao/conn.php');

  $IDTIPO_USUARIO = $_REQUEST['IDTIPO_USUARIO'];

  $sql = "DELETE FROM TIPO_USUARIO WHERE IDTIPO_USUARIO = $IDTIPO_USUARIO";

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
