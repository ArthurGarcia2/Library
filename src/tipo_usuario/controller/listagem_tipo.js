$(document).ready(function() {

    $('#table_tipo').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/tipo_usuario/model/listagem_tipo.php",
            "type": "POST"
        },
        "columns": [{
                "data": 'IDTIPO_USUARIO',
                "className": "text-center"
            },
            {
                "data": 'DESCRICAO',
                "className": "text-center"
            },
            {
                "data": 'IDTIPO_USUARIO',
                "orderable": false,
                "searchable": false,
                "className": "text-center",
                "render": function(data, type, row, meta) {
                    return `
                        <button id="${data}" class="btn btn-info btn-sm btn_view"><i class="fas fa-eye"></i></button>
                        <button id="${data}" class="btn btn-primary btn-sm btn_edit"><i class="fas fa-edit"></i></button>
                        <button id="${data}" class="btn btn-danger btn-sm btn_delete"><i class="fas fa-trash-alt"></i></button>
                    `
                }
            }
        ]
    })
})