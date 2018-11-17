$(document).ready(function() {
    $('#btnEnviar').click(function(event) {
        event.preventDefault();
        validarCampos();
    });

$ ( ".select" ). select2 ({ 
  language: {

    noResults: function() {

      return "No hay resultado";        
    },
    searching: function() {

      return "Buscando..";
    }
  }
}); 

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

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    function validarCampos() {
        var nombre = $('#nombre').val();
        var descripcion = $('#descripcion').val();
        var autor = $('#autor').val();
        var tipo_plano = $('#tipo_plano').val();
        var archivo = $('#archivo').val();

        //valida cada campo con if
        if (nombre.length == 0 || descripcion.length == 0 || autor.length == 0 || tipo_plano.length == 0 || archivo.length == 0) {
            if (nombre.length == 0) {
                $('#nombre').addClass('empty-input');
            } else {
                $('#nombre').removeClass('empty-input');
            }
            if (descripcion.length == 0) {
                $('#descripcion').addClass('empty-input');
            } else {
                $('#descripcion').removeClass('empty-input');
            }
            if (autor.length == 0) {
                $('#autor').addClass('empty-input');
            } else {
                $('#autor').removeClass('empty-input');
            }
            if (tipo_plano.length == 0) {
                $('#tipo_plano').addClass('empty-input');
            } else {
                $('#tipo_plano').removeClass('empty-input');
            }
            if (archivo.length == 0) {
                $('#archivo').addClass('empty-input');
            } else {
                $('#archivo').removeClass('empty-input');
            }
            
        } else {
            $('#nombre').removeClass('empty-input');
            $('#descripcion').removeClass('empty-input');
            $('#autor').removeClass('empty-input');
            $('#tipo_plano').removeClass('empty-input');
            $('#archivo').removeClass('empty-input');
            $('#descripcion').removeClass('empty-input');
            //recacar url del boton
            var url = $('#btnEnviar').data('url');
            $.ajax({
                type: "POST",
                url: url,
                data: {
                    nombre: nombre,
                    descripcion: descripcion,
                    tipo_plano: tipo_plano,
                    autor: autor,
                    archivo: archivo
                },
                success: function(datos) {
                    console.log(datos);
                    if (datos == "ok") {
                        location.reload();
                    } else {
                        alert("error algo paso");
                    }
                },
                error: function(error) {
                    console.log(error);
                }
            });
        }
    }
});