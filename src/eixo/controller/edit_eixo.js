$(document).ready(function() {

    $('#table_eixo').on('click', 'button.btn_edit', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-title').append('Editar um eixo')

        let IDEIXO = `IDEIXO=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDEIXO,
            url: "src/eixo/model/vizu_eixo.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/eixo/view/form_new_eixo.html', function() {
                        $('#DESCRICAO').val(dado.dados.DESCRICAO)
                        $('#IDEIXO').val(dado.dados.IDEIXO)
                    })
                    $('.btn_new_save').show()
                    $('.btn_new_save').removeAttr('data-operacao')
                    $('#eixo_modal').modal('show')
                }
            }
        })
    })
})