$(document).ready(function() {

    $(".btn_add").click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar um eixo tecnologico')
        $('.modal-body').load('src/eixo/view/form_new_eixo.html')

        $('.btn_new_save').show()
        $('.btn_new_save').attr('data-operacao', 'insert')

        $('#eixo_modal').modal('show')
        $('#table-eixo').DataTable().ajax.reload()
    })
})