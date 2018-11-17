$(document).ready(function() {
    //valida los campos y guarda en base de datos
    $('#btnEnviar').click(function(event) {
        event.preventDefault();
        validarCampos();
    });
    //funcion select2 y traduccion lenguaje
    $(".select").select2({
        language: {
            noResults: function() {
                return "No hay resultado";
            },
            searching: function() {
                return "Buscando..";
            }
        }
    });
    //traduccuion del dataTable
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
    //funcion para validar campos
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
    //modal eliminar fotografia
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
                var html = ' ¿esta seguro de eliminar esta foto?';
                $('.b_eliminar').html(html);
                $('.modal_eliminar').modal('show');
            },
            error: function(error) {
                console.log(error);
            }
        });
        $('#modal_eliminar').modal('show');
    });
    //modal editar foto
    $('.btn-edit').click(function(event) {
        var id = $(this).data('id');
        var url = $(this).data('url');
        $.ajax({
            type: "POST",
            url: url,
            data: {
                id: id
            },
            success: function(datos) { //remplazando los datos del modal con los de la base de datos
                $('#mimodalLabel_editar').html("Editar  " + datos['nombre']);
                var html = '<div class="form-row">' +
                 '<div class="form-group col-md-6">' + 
                 '<div class="form-row">' + '<div class="form-group col md-12">' + 
                 '<label for="nombre">Nombre</label>' +
                  '<input type="text" class="form-control" id="nombre" placeholder="Nombre" value="' + datos['nombre'] + '">' +
                   '</div>' + '<div class="form-group col-md-12">' + '<label for="autor">autor</label>' + 
                   '<input type="text" class="form-control" id="autor" placeholder="autor" value="' + datos['autor'] + '">' + 
                   '</div>' + '<div class="form-group col-md-12">' + '<label for="tipo_plano">tipo de plano</label>' + 
                   '<input type="text" class="form-control" id="tipo_plano" placeholder="tipo_plano" value="' + datos['tipo_plano'] + '">' + 
                   '</div>' + '<div class="form-group col-md-12">' + '<label for="archivo">archivo</label>' + 
                   '<input type="text" class="form-control" id="archivo" placeholder="archivo" value="' + datos['archivo'] + '">' + 
                   '</div>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<label for="descripcion">Descripcion</label>' + 
                   '<textarea class="form-control inp2" name="descripcion" id="descripcion" cols="30" rows="12">' + datos['descripcion'] + '</textarea><br>' + 
                   '</div>' + '</div>';
                $('.b_editar').html(html);
                $('.modal_editar').modal('show');
            },
            error: function(error) {
                console.log(error);
            }
        });
        $('#modal_editar').modal('show');
    });

    //modal eliminar fotografia
    $('.btn-comentario').click(function(event) {
        var id = $(this).data('id');
       var url = $(this).data('url');

        $.ajax({
            type: "POST",
            url: url,
            data: {
                id: id
            },
            success: function(datos) { //remplazando los datos del modal con los de la base de datos
                
                $('#mimodalLabel_comentario').html("comentario de " + datos['nombre']); 

                var html = '<div class="content">'+ datos['descripcion']+ '</div>';

                
                $('.b_comentario').html(html);
                $('.modal_comentario').modal('show');
                  },
            error: function(error) {
                console.log(error);
            }
        });
         $('#modal_comentario').modal('show');
    });
});