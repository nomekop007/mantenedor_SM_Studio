$(document).ready(function() {
    //valida los campos y guarda en base de datos
    $('#btnEnviar3').click(function(event) {
        event.preventDefault();
        validarCampos();
    });


    function validarCampos() {

        var telefono = $('#telefono').val();

        var correo = $('#correo').val();
        var direccion = $('#direccion').val();
        var redSocial = $('#redes').val();
        //valida cada campo con if
        if (telefono.length == 0 || correo.length == 0 || direccion.length == 0) {
            if (telefono.length == 0) {
                $('#telefono').addClass('empty-input');
            } else {
                $('#telefono').removeClass('empty-input');
            }
            if (correo.length == 0) {
                $('#correo').addClass('empty-input');
            } else {
                $('#correo').removeClass('empty-input');
            }
            if (direccion.length == 0) {
                $('#direccion').addClass('empty-input');
            } else {
                $('#direccion').removeClass('empty-input');
            }

        } else {
            $('#telefono').removeClass('empty-input');
            $('#correo').removeClass('empty-input');
            $('#direccion').removeClass('empty-input');
            $('#redes').removeClass('empty-input');
         

            //rescatar url del boton
            var url = $('#btnEnviar3').data('url');
            $.ajax({
                type: "POST",
                url: url,
                data: {
                    telefono: telefono,
                    correo: correo,
                    direccion: direccion,
                    redSocial: redSocial 
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
                    $('#telefono').addClass('empty-input');
                }
            });
        }
    }



        //modal eliminar contacto
    $('.btn-delete3').click(function(event) {
        var id = $(this).data('id');
        var url = $(this).data('url');
        $.ajax({
            type: "POST",
            url: url,
            data: {
                id: id
            },
            success: function(datos) { //remplazando los datos del modal con los de la base de datos
                $('#mimodalLabel_eliminar').html("Eliminar contacto " + datos['correo']);
                var html = ' ¿esta seguro de eliminar este contacto?';
                $('.b_eliminar').html(html);
                $('.modal_eliminar').modal('show');
            },
            error: function(error) {
                console.log(error);
            }
        });
        $('#modal_eliminar').modal('show');
    });



   //modal editar video
    $('.btn-edit3').click(function(event) {
        var id = $(this).data('id');
        var url = $(this).data('url');
        $.ajax({
            type: "POST",
            url: url,
            data: {
                id: id
            },
            success: function(datos) { //remplazando los datos del modal con los de la base de datos
                $('#mimodalLabel_editar').html("Editar contacto  " + datos['correo']);



                    if (datos['redSocial'] == null) {
                        var m = 'sin datos';
                    } else{
                          var m = datos['redSocial'];
                    }
                    //completar formulario

                var html = '<div class="form-row">'+
            '<div class="form-group col-md-12">'+
                '<div class="form row">'+
                    '<div class="form-group col-md-6">'+
                        '<label for="telefono"> Telefono</label>'+
                        '<input class="form-control" id="telefono" name="telefono" placeholder="solo numeros" type="text" value="' + datos['telefono'] + '">'+
                        '</input>'+
                    '</div>'+


                    '<div class="form-group col-md-6">'+
                       '<label for="correo electronico"> Correo electronico'+
                        '</label>'+
                        '<input class="form-control" id="correo" name="correo electronico" placeholder="correo electronico" type="text" value="' + datos['correo'] + '">'+
                        '</input>'+
                    '</div>'+

                        '<div class="form-group col-md-6">'+
                        '<label for="direccion">Direccion'+
                        '</label>'+
                        '<input class="form-control" id="direccion" name="direccion" placeholder="direccion" type="text" value="' + datos['direccion'] + '">'+
                        '</input>'+
                    '</div>'+

              '<div class="form-group col-md-6">'+
                        '<label for="redes">Redes sociales</label><br>'+
                         '<select class=" select3 form-control-plaintext" id="redes" name="redes">'+
                            '<option value="' + m + '">' + m + '</option>'+
                            '<option value="Facebook">Facebook</option>'+
                            '<option value="Instagram">Instagram</option>'+
                            '<option value="Twitter">Twitter</option>'+
                            
                        '</select>'+
                    '</div>'+

                       
                    
                '</div>'+
            '</div>'+
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