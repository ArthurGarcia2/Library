$(document).ready(function() {

    $(".btn_add").click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar um curso tecnologico')
        $('.modal-body').load('src/curso/view/form_new_curso.html', function() {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/eixo/model/all_eixo.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#EIXO_IDEIXO').append(`<option value="${dado.IDEIXO}">${dado.NOME}</option>`);
                    }
                }
            })
        })

        $('.btn_new_save').show()
        $('.btn_new_save').attr('data-operation', 'insert')

        $('#curso_modal').modal('show')
        $('#table-curso').DataTable().ajax.reload()
    })
})