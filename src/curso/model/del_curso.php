<?php
  include('../../conexao/conn.php');

  $IDCURSO = $_REQUEST['IDCURSO'];

  $sql = "DELETE FROM CURSO WHERE IDCURSO = $IDCURSO";

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
