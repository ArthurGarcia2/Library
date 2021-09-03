$(document).ready(
    function() {
        $('.btn_pesqui').click(function(e) {
            e.preventDefault()

            let NOME = `NOME=${$('#PESQUI_AUTOR').val()}`

            fix_user = 0

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: NOME,
                url: 'src/usuario/model/pesqui_usuario.php',
                success: function(dados) {
                    $('#campo_autores').empty()
                    $('#campo_autores_btn').empty()
                    if (Object.values(dados).length === 0) {
                        $('#campo_autores').append(`<input type="text" name="" id="" class="form-control" value="Nenhum resultado encontrado" disabled></input>`)
                    } else {
                        for (const dado of dados) {
                            $('#campo_autores').append(`<input type="text" name="" id="" class="form-control" value="${dado.NOME}" disabled></input>`)
                            $('#campo_autores').append(`<input type="hidden" name="IDUSUARIO" id="IDUSUARIO" value="">`)
                            $('#campo_autores_btn').append(`<button class="btn btn-primary fix_user" id="${dado.IDUSUARIO}" type="button"><i class="fas fa-paperclip"></i></button>`)
                        }
                    }
                }
            })

        })
    }
)