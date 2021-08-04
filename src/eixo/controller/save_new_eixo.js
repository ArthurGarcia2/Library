$(document).ready(function() {

    $(".btn_new_save").click(function(e) {
        e.preventDefault()

        let retorno = $('#form_new_eixo').serialize()

        retorno += `&operacao=${$('.btn_new_save').attr('data-operacao')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: retorno,
            url: 'src/eixo/model/save_new_eixo.php',
            success: function(retorno) {
                Swal.fire({
                    title: 'Atenção!',
                    text: retorno.mensagem,
                    icon: retorno.tipo,
                    confirmButtonText: "Okay"
                })
                $('#eixo_modal').hide()
                $('#table_eixo').DataTable().ajax.reload()
            }
        })

    })

})