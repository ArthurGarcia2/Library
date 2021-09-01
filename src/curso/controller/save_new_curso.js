$(document).ready(function() {

    $('.btn_new_save').click(function(e) {
        e.preventDefault()

        let retorno = $('#form_new_curso').serialize()

        retorno += `&operacao=${$('.btn_new_save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: retorno,
            url: 'src/curso/model/save_new_curso.php',
            success: function(retorno) {
                Swal.fire({
                    title: 'Atenção!',
                    text: retorno.mensagem,
                    icon: retorno.tipo,
                    confirmButtonText: "Okay"
                })
                $('#curso_modal').modal('hide')
                $('#table_curso').DataTable().ajax.reload()
            }
        })

    })

})