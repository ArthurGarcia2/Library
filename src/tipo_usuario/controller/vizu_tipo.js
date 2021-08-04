$(document).ready(function() {

    $('#table_tipo').on('click', 'button.btn_vizu', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-title').append('Tipo de Usuario:')

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
                        $('#DESCRICAO').attr('readonly', 'true')
                    })
                    $('.btn_new_save').hide()
                    $('#tipo_modal').modal('show')
                }
            }
        })
    })
})