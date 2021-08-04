$(document).ready(function() {

    $('#table_tipo').on('click', 'button.btn_del', function(e) {

        e.preventDefault()

        let IDTIPO_USUARIO = `IDTIPO_USUARIO=${$(this).attr('id')}`

        Swal.fire({
            title: 'OPA!!!',
            text: 'Quer mesmo deletar este item?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Quero',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: IDTIPO_USUARIO,
                    url: "src/tipo_usuario/model/del_tipo.php",
                    success: function(dados) {
                        Swal.fire({
                            title: dados.titulo,
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'Ta Bom'
                        })
                        $('#table_tipo').DataTable().ajax.reload()
                    },
                    error: function(dados) {
                        Swal.fire({
                            title: 'Deu Ruim!',
                            text: 'Item não deletado',
                            icon: 'error',
                            confirmButtonText: 'Ta Bom'
                        })
                        $('#table_tipo').DataTable().ajax.reload()
                    }
                })
            }
        })
    })

})