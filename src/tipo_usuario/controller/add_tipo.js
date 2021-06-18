$(document).ready(function() {

    $(".btn_add").click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar um tipo de usuario')
        $('.modal-body').load('src/tipo_usuario/view/form_new_tipo.html')

        $('.btn_new_save').show()
        $('.btn_new_save').attr('data-operacao', 'insert')

        $('#tipo_modal').modal('show')
        $('#table-tipo').DataTable().ajax.reload()
    })
})