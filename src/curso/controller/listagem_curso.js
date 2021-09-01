$(document).ready(function() {

    $('#table_curso').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/curso/model/listagem_curso.php",
            "type": "POST"
        },
        "languagem": {
            "url": "libs/dataTable/pt_br.json"
        },
        "columns": [{
                "data": 'IDCURSO',
                "className": "text-center"
            },
            {
                "data": 'NOME',
                "className": "text-center"
            },
            {
                "data": 'IDCURSO',
                "orderable": false,
                "searchable": false,
                "className": "text-center",
                "render": function(data, type, row, meta) {
                    return `
                        <button id="${data}" class="btn btn-info btn-sm btn_vizu"><i class="far fa-eye"></i></button>
                        <button id="${data}" class="btn btn-primary btn-sm btn_edit"><i class="far fa-edit"></i></button>
                        <button id="${data}" class="btn btn-danger btn-sm btn_del"><i class="far fa-trash-alt"></i></button>
                    `
                }
            }
        ]
    })
})