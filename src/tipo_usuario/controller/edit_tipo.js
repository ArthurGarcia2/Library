$(document).ready(function() {

    $('#table_tipo').on('click', 'button.btn_edit', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-title').append('Editar um tipo de usuário')

        let IDTIPO_USUARIO = `IDTIPO_USUARIO=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDTIPO_USUARIO,
            url: "src/tipo_usuario/model/vizu_tipo.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/tipo_usuario/view/form_new_tipo.html', function() {
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#IDTIPO_USUARIO').val(dado.dados.IDTIPO_USUARIO)
                    })
                    $('.btn_new_save').show()
                    $('.btn_new_save').removeAttr('data-operacao')
                    $('#tipo_modal').modal('show')
                }
            }
        })
    })
})