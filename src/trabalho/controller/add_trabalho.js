$(document).ready(function() {

    $(".btn_add").click(function(e) {

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar um trabalho tecnologico')
        $('.modal-body').load('src/trabalho/view/form_new_trabalho.html', function() {

        })

        $('.btn_new_save').show()
        $('.btn_new_save').attr('data-operation', 'insert')

        $('#trabalho_modal').modal('show')
        $('#table-trabalho').DataTable().ajax.reload()
    })
})