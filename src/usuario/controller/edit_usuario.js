$(document).ready(function() {

    $('#table_usuario').on('click', 'button.btn_edit', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-title').append('Usuario:')

        let IDUSUARIO = `IDUSUARIO=${$(this).attr('id')}`
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDUSUARIO,
            url: "src/usuario/model/vizu_usuario.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/usuario/view/form_new_usuario.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#EMAIL').val(dado.dados.EMAIL)
                        $('#SENHA').val(dado.dados.SENHA)
                        $('#IDUSUARIO').val(dado.dados.IDUSUARIO)
                        var tipo = dado.dados.TIPO_USUARIO_IDTIPO_USUARIO
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/tipo_usuario/model/all_tipo.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDTIPO_USUARIO == tipo) {
                                        $('#TIPO_USUARIO_IDTIPO_USUARIO').append(`<option selected value="${dado.IDTIPO_USUARIO}">${dado.DESCRICAO}</option>`);
                                    } else {
                                        $('#TIPO_USUARIO_IDTIPO_USUARIO').append(`<option value="${dado.IDTIPO_USUARIO}">${dado.DESCRICAO}</option>`);
                                    }
                                }
                            }
                        })
                        $('#TIPO_USUARIO_IDTIPO_USUARIO').attr('readonly', 'true')

                        var curso = dado.dados.CURSO_IDCURSO
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/curso/model/all_curso.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDCURSO == curso) {
                                        $('#CURSO_IDCURSO').append(`<option selected value="${dado.IDCURSO}">${dado.NOME}</option>`);
                                    } else {
                                        $('#CURSO_IDCURSO').append(`<option value="${dado.IDCURSO}">${dado.NOME}</option>`);
                                    }
                                }
                            }
                        })

                        $('#CURSO_IDCURSO').attr('readonly', 'true')
                    })

                    $('.btn_new_save').show()
                    $('.btn_new_save').removeAttr('data-operacao')
                    $('#usuario_modal').modal('show')
                }
            }
        })
    })
})