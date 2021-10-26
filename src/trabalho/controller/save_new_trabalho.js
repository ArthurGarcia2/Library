$(document).ready(function() {
    $('.btn_new_save').click(function(e) {
        e.preventDefault()
        url = 'src/trabalho/model/save_new_trabalho.php'

        var formData = new FormData(document.getElementById("form_new_trabalho"))

        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            mimeType: "multipart/form-data",
            dataType: 'json',
            contentType: false,
            cache: false,
            processData: false,
            success: function(dados) {
                Swal.fire({
                    title: 'Library',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#trabalho_modal').modal('hide')
                    // $('#table-trabalho').DataTable().ajax.reload()
            }
        })
    })
})