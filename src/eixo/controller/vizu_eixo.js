$(document).ready(function() {

    $('#table_eixo').on('click', 'button.btn_vizu', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-title').append('Eixo:')

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
                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')
                    })
                    $('.btn_new_save').hide()
                    $('#eixo_modal').modal('show')
                }
            }
        })
    })
})