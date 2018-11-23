$(document).ready(function() {
    //valida los campos y guarda en base de datos
    $('#btnEnviar2').click(function(event) {
        event.preventDefault();
        validarCampos();
    });


    function validarCampos() {
        var nombre = $('#nombre2').val();
        var descripcion = $('#descripcion2').val();
        var autor = $('#autor2').val();
        var tipo_plano = $('#tipo_plano2').val();
        var formato = $('#formato2').val();
        var archivo = $('#archivo2').val();
        //valida cada campo con if
        if (nombre.length == 0 || descripcion.length == 0 || autor.length == 0 || tipo_plano.length == 0 || archivo.length == 0) {
            if (nombre.length == 0 || formato.length == 0) {
                $('#nombre2').addClass('empty-input');
            } else {
                $('#nombre2').removeClass('empty-input');
            }
            if (descripcion.length == 0) {
                $('#descripcion2').addClass('empty-input');
            } else {
                $('#descripcion2').removeClass('empty-input');
            }
            if (autor.length == 0) {
                $('#autor2').addClass('empty-input');
            } else {
                $('#autor2').removeClass('empty-input');
            }
            if (tipo_plano.length == 0) {
                $('#tipo_plano2').addClass('empty-input');
            } else {
                $('#tipo_plano2').removeClass('empty-input');
            }
            if (archivo.length == 0) {
                $('#archivo2').addClass('empty-input');
            } else {
                $('#archivo2').removeClass('empty-input');
            } 
            if (formato.length == 0) {
                $('#formato2').addClass('empty-input');
            } else {
                $('#formato2').removeClass('empty-input');
            }
        } else {
            $('#nombre2').removeClass('empty-input');
            $('#descripcion2').removeClass('empty-input');
            $('#autor2').removeClass('empty-input');
            $('#tipo_plano2').removeClass('empty-input');
            $('#formato2').removeClass('empty-input');
            $('#archivo2').removeClass('empty-input');
            $('#descripcion2').removeClass('empty-input');
            //recacar url del boton
            var url = $('#btnEnviar2').data('url');
            $.ajax({
                type: "POST",
                url: url,
                data: {
                    nombre: nombre,
                    descripcion: descripcion,
                    tipo_plano: tipo_plano.toString(),
                    autor: autor,
                    archivo: archivo,
                    formato: formato
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




    //modal editar video
    $('.btn-edit2').click(function(event) {
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
                 '<div class="form-row">' +

                  '<div class="form-group col md-12">' + 
                 '<label for="nombre">Nombre</label>' +
                  '<input type="text" class="form-control" id="nombre" placeholder="Nombre" value="' + datos['nombre'] + '">' +
                   '</div>' + 


                   '<div class="form-group col-md-12">' + 
                   '<label for="autor">autor</label>' + 
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
                   '</div>' + 
                   '</div>' + 
                   '</div>' + 
                     '<div class="form-group col-md-6">' + 
                 '<div class="form-row">' +
                '<div class="form-group col-md-12">' + 
                '<label for="formato">formato</label>' +
                    '<select class="form-control" id="formato" name="formato">'+
                    '<option value="' + datos['formato'] + '">' + datos['formato'] +'</option>' +
                            '<option value=".AVI">.AVI</option>'+
                            '<option value=".MP4">.MP4</option>'+
                            '<option value=".AVI">.AVI</option>'+
                            '<option value=".MPEG">.MPEG</option>'+
                            '<option value=".MOV">.MOV</option>'+
                            '<option value=".WMV">.WMV</option>'+
                            '<option value=".FLV">.FLV</option>'+
                            '<option value=".RM">.RM</option>'+
                        '</select>'+
                        '</div>' + 
     
                   '<div class="form-group col-md-12">' + 
                   '<label for="descripcion">Descripcion</label>' + 
                   '<textarea class="form-control inp3" name="descripcion" id="descripcion" cols="30" rows="12">' + datos['descripcion'] + '</textarea><br>' + 
                   '</div>' + 
                   '</div>' + 
                   '</div>' + 
                   '</div>';
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