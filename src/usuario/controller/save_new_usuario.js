$(document).ready(function() {

    $('.btn_new_save').click(function(e) {
        e.preventDefault()

        let retorno = $('#form_new_usuario').serialize()

        retorno += `&operacao=${$('.btn_new_save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: retorno,
            url: 'src/usuario/model/save_new_usuario.php',
            success: function(retorno) {
                Swal.fire({
                    title: 'Atenção!',
                    text: retorno.mensagem,
                    icon: retorno.tipo,
                    confirmButtonText: "Okay"
                })
                $('#usuario_modal').modal('hide')
                $('#table_usuario').DataTable().ajax.reload()
            }
        })

    })

})