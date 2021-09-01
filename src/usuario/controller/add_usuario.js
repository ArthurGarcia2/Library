$(document).ready(function() {

    $(".btn_add").click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar um usuario')
        $('.modal-body').load('src/usuario/view/form_new_usuario.html', function() {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/tipo_usuario/model/all_tipo.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#TIPO_USUARIO_IDTIPO_USUARIO').append(`<option value="${dado.IDTIPO_USUARIO}">${dado.DESCRICAO}</option>`);
                    }
                }
            })
            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/curso/model/all_curso.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#CURSO_IDCURSO').append(`<option value="${dado.IDCURSO}">${dado.NOME}</option>`);
                    }
                }
            })
        })

        $('.btn_new_save').show()
        $('.btn_new_save').attr('data-operation', 'insert')

        $('#usuario_modal').modal('show')
        $('#table-usuario').DataTable().ajax.reload()
    })
})