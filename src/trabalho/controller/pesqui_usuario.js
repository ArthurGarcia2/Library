$(document).ready(
    function() {
        $('.btn_pesqui').click(function(e) {
            e.preventDefault()

            let NOME = `NOME=${$('#PESQUI_AUTOR').val()}`

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: NOME,
                url: 'src/usuario/model/pesqui_usuario.php',
                success: function(data) {

                }
            })

        })
    }
)