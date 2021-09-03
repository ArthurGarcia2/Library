$(document).ready(function() {
    $('#fixados_btn').on('click', 'button.unpin_user', function(e) {
        e.preventDefault()

        $('#fixados').empty()
        $('#fixados_btn').empty()

        // let IDUSUARIO = `IDUSUARIO=${$(this).attr('id')}`

        // $.ajax({
        //     dataType: 'json',
        //     type: 'POST',
        //     assync: true,
        //     data: IDUSUARIO,
        //     url: 'src/usuario/model/fix_usuario.php',
        //     success: function(dados) {
        //         for (const dado of dados) {
        //             $('#fixados').empty()
        //             $('#fixados_btn').empty()
        //         }
        //     }
        // })
    })
})