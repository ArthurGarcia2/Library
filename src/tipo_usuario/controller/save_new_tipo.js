$(document).ready(function() {

    $(".btn_new_save").click(function(e) {
        e.preventDefault()

        let retorno = $('#form_new_tipo').serialize()

        retorno += `&operacao=${$('.btn_new_save').attr('data-operacao')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: retorno,
            url: 'src/tipo_usuario/model/save_new_tipo.php',
            success: function(retorno) {
                Swal.fire({
                    title: 'Atenção!',
                    text: retorno.mensagem,
                    icon: retorno.tipo,
                    confirmButtonText: "Okay"
                })
                $('#tipo_modal').hide()
                $('#table_tipo').DataTable().ajax.reload()
            }
        })

    })

})