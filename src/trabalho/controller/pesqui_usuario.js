var i = 0;

function unpin_user() {
    $('#fixados_clear_all').on('click', 'button.fixados_clear_all_btn', function(e) {
        e.preventDefault()

        $('#fixados_group').empty()

        i = 0
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
}

function fix_usuario() {
    $('#campo_autores_group').on('click', 'button.fix_user', function(e) {
        e.preventDefault()

        let IDUSUARIO = `IDUSUARIO=${$(this).attr('id')}`
        var id_user = $(this).attr('id')
        var nome_user = $(this).attr('name')


        $('#fixados_group').ready(function() {

            let existing = $('#existing' + id_user).attr('data-operation')


            if ((existing == "tru") || (i == 4)) {
                alert('Autor já fixado, ou o limite de autores por TCC foi atingido')
            } else {
                i += 1;
                $('#fixados_group').append(`
                    <div class="col-10">
                        <div type="text" id="existing${id_user}" data-operation="tru" class="form-control">${nome_user}</div>
                        <input type="hidden" name="USUARIO_IDUSUARIO[]" value="${id_user}" />
                    </div>
                    <div class="col-2">
                        <button class="btn btn-primary unpin_user" name="${nome_user}" id="${id_user}" type="button"><i class="fas fa-unlink"></i></button>
                    </div>
                `)
            }
        })
    })
}

$(document).ready(function() {
    $('.btn_pesqui').click(function(e) {
        e.preventDefault()

        let NOME = `NOME=${$('#PESQUI_AUTOR').val()}`

        fix_user = 0

        if ($('#PESQUI_AUTOR').val() != "") {

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: NOME,
                url: 'src/usuario/model/pesqui_usuario.php',
                success: function(dados) {
                    $('#campo_autores_group').empty()
                    if (Object.values(dados).length === 0) {
                        $('#campo_autores_group').append(`<div type="text" name="" id="" class="form-control">Nenhum resultado encontrado</div>`)
                    } else {
                        for (const dado of dados) {

                            $('#campo_autores_group').append(`
                                    <div class="col-10">
                                    <div type="text" name="" id="" class="form-control">${dado.NOME}</div>
                                    </div>
                                    <div class="col-2" class="campo_autores_btn">
                                    <button class="btn btn-primary fix_user" name="${dado.NOME}" id="${dado.IDUSUARIO}" type="button"><i class="fas fa-paperclip"></i></button>
                                    </div>`);
                        }
                    }
                }
            })
        } else {
            $('#campo_autores_group').empty()
        }

    })
    unpin_user()
    fix_usuario()
})