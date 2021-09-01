$(document).ready(function() {

    $('#table_curso').on('click', 'button.btn_vizu', function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()
        $('.modal-title').append('Curso:')

        let IDCURSO = `IDCURSO=${$(this).attr('id')}`
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDCURSO,
            url: "src/curso/model/vizu_curso.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/curso/view/form_new_curso.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')
                        var eixo = dado.dados.EIXO_IDEIXO
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/eixo/model/all_eixo.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.IDEIXO == eixo) {
                                        $('#EIXO_IDEIXO').append(`<option value="${dado.IDEIXO}">${dado.NOME}</option>`);
                                    }
                                }
                            }
                        })
                        $('#EIXO_IDEIXO').attr('readonly', 'true')
                    })
                    $('.btn_new_save').hide()
                    $('#curso_modal').modal('show')
                }
            }
        })
    })
})