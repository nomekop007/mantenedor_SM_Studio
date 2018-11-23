$(document).ready(function() {
    //valida los campos y guarda en base de datos
    $('#btnEnviar').click(function(event) {
        event.preventDefault();
        validarCampos();
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
                    tipo_plano: tipo_plano.toString(),
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
                   '</div>' + 


                   '<div class="form-group col-md-12">' + 
                '<label for="tipo_plano">tipo de plano</label>' +
                    '<select class="form-control" id="tipo_plano" name="tipo_plano">'+
                    '<option value="' + datos['tipo_plano'] + '">' + datos['tipo_plano'] +'</option>' +
                    '<option value="Plano Figura">Plano Figura</option>'+
                    ' <option value="Plano Americano o ¾">Plano Americano o ¾</option>'+
                    '<option value="Plano Medio">Plano Medio</option>'+
                    ' <option value="Plano Medio Corto">Plano Medio Corto</option>'+
                    ' <option value="Plano Detalle">Plano Detalle</option>'+
                    '<option value="Plano Contrapicado">Plano Contrapicado</option>'+
                    '<option value="Plano Escorzo">Plano Escorzo</option>'+
                    '<option value="Plano Perfil">Plano Perfil</option>'+
                    '<option value="Plano Frontal">Plano Frontal</option>'+
                        '</select>'+
                        '</div>' + 



                   '<div class="form-group col-md-12">' +
                    '<label for="archivo">archivo ruta</label>' + 
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



});