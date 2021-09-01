$(document).ready(function() {

    $('#table_curso').on('click', 'button.btn_del', function(e) {

        e.preventDefault()

        let IDCURSO = `IDCURSO=${$(this).attr('id')}`

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
                    data: IDCURSO,
                    url: "src/curso/model/del_curso.php",
                    success: function(dados) {
                        Swal.fire({
                            title: dados.titulo,
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'Ta Bom'
                        })
                        $('#table_curso').DataTable().ajax.reload()
                    },
                    error: function(dados) {
                        Swal.fire({
                            title: 'Deu Ruim!',
                            text: 'Item não deletado',
                            icon: 'error',
                            confirmButtonText: 'Ta Bom'
                        })
                        $('#table_curso').DataTable().ajax.reload()
                    }
                })
            }
        })
    })

})