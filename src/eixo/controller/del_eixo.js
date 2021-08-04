$(document).ready(function() {

    $('#table_eixo').on('click', 'button.btn_del', function(e) {

        e.preventDefault()

        let IDEIXO = `IDEIXO=${$(this).attr('id')}`

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
                    data: IDEIXO,
                    url: "src/eixo/model/del_eixo.php",
                    success: function(dados) {
                        Swal.fire({
                            title: dados.titulo,
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'Ta Bom'
                        })
                        $('#table_eixo').DataTable().ajax.reload()
                    },
                    error: function(dados) {
                        Swal.fire({
                            title: 'Deu Ruim!',
                            text: 'Item não deletado',
                            icon: 'error',
                            confirmButtonText: 'Ta Bom'
                        })
                        $('#table_eixo').DataTable().ajax.reload()
                    }
                })
            }
        })
    })

})