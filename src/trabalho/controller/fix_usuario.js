$(document).ready(function() {
    $('#campo_autores_btn').on('click', 'button.fix_user', function(e) {
        e.preventDefault()

        let IDUSUARIO = `IDUSUARIO=${$(this).attr('id')}`

        $.ajax({
            dataType: 'json',
            type: 'POST',
            assync: true,
            data: IDUSUARIO,
            url: 'src/usuario/model/fix_usuario.php',
            success: function(dados) {
                for (const dado of dados) {
                    $('#fixados').append(`<input type="text" name="NOME" id="NOME" class="form-control" value="${dado.NOME}" disabled></input>`)
                    $('#fixados_btn').append(`<button class="btn btn-primary unpin_user" id="" nome="" type="button"><i class="fas fa-unlink"></i></button>`)
                }
            }
        })
    })
})