$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    //funcion select2 para configurarlo
    $(".select").select2({
        placeholder: "Seleccione un plano",
        allowClear: true
    });
    $(".select2").select2({
        placeholder: "Seleccione formato",
        allowClear: true
    });
    $(".select3").select2({
        placeholder: "opcional",
        allowClear: true
    });
    //traduccion del dataTable
    $('.mi-dataTable').DataTable({
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
    //modal descripcion video y foto
    $('.btn-descripcion').click(function(event) {
        var id = $(this).data('id');
        var url = $(this).data('url');
        $.ajax({
            type: "POST",
            url: url,
            data: {
                id: id
            },
            success: function(datos) { //remplazando los datos del modal con los de la base de datos
                $('#mimodalLabel_des').html("descripcion de " + datos['nombre']);
                var html = '<div class="content">' + datos['descripcion'] + '</div>';
                $('.b_des').html(html);
                $('.modal_des').modal('show');
            },
            error: function(error) {
                console.log(error);
            }
        });
        $('#modal_des').modal('show');
    });
    //modal eliminar video o foto
    $('.btn-delete').click(function(event) {
        var id = $(this).data('id');
        var url = $(this).data('url');
        $.ajax({
            type: "POST",
            url: url,
            data: {
                id: id
            },
            success: function(datos) { //remplazando los datos del modal con los de la base de datos
                $('#mimodalLabel_eliminar').html("Eliminar  " + datos['nombre']);
                var html = ' ¿esta seguro de eliminar esto?';
                $('.b_eliminar').html(html);
                $('.modal_eliminar').modal('show');
            },
            error: function(error) {
                console.log(error);
            }
        });
        $('#modal_eliminar').modal('show');
    });
});