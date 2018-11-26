$(document).ready(function() {
    //valida los campos y guarda en base de datos
    $('#btnEnviar3').click(function(event) {
        event.preventDefault();
        validarCampos();
    });


//scrips para limitar los caracteres numericos del input telefono
var input =  document.getElementById('telefono');
if (input !=null) {
input.addEventListener('input',function(){
  if (this.value.length > 9) 
     this.value = this.value.slice(0,9); 
});
} 

/* scrips para mostrar la lista de contacto
var lista = $('#n1').val();
if (lista != null) {
     var arraydeLista = lista.split(",");
var foo = arraydeLista.map(function(bar){
  return '<li>'+bar+'</li>'
})
document.getElementById("foo").innerHTML = foo;
}*/






            //validar y crear
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
                    redSocial : redSocial.toString() 
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




   //modal editar contacto
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
                        '<input class="form-control" id="telefono2" name="telefono" placeholder="solo numeros" type="text" value="' + datos['telefono'] + '">'+
                        '</input>'+
                    '</div>'+


                    '<div class="form-group col-md-6">'+
                       '<label for="correo electronico"> Correo electronico'+
                        '</label>'+
                        '<input class="form-control" id="correo2" name="correo electronico" placeholder="correo electronico" type="text" value="' + datos['correo'] + '">'+
                        '</input>'+
                    '</div>'+

                        '<div class="form-group col-md-6">'+
                        '<label for="direccion">Direccion'+
                        '</label>'+
                        '<input class="form-control" id="direccion2" name="direccion" placeholder="direccion" type="text" value="' + datos['direccion'] + '">'+
                        '</input>'+
                    '</div>'+

              '<div class="form-group col-md-6">'+
                        '<label for="redes">Redes sociales</label><br>'+
                         '<select class="  select3 js-example-basic-multiple js-states form-control " id="redes2" name="redes">'+
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





        /* actualizar contacto
    $('#editar').click(function(event) {

             
        var telefono2 = $('#telefono2').val();
        var correo2 = $('#correo2').val();
        var direccion2 = $('#direccion2').val();
        var redSocial2 = $('#redes2').val();

           var id = $(this).data('id');
             var url = $('#editar').data('url');
    
            $.ajax({
                type: "POST",
                url: url,
                data: {
                     id: id,
                    telefono: telefono2,
                    correo: correo2,
                    direccion: direccion2,
                    redSocial: redSocial2
                },
                success: function(datos) {
                    console.log(id);
                    if (datos == "ok") {
                        location.reload();
                          alert("editado");
                    } else {
                         alert("error algo paso");
                    }
                },
                error: function(error) {
                    console.log(error);
                }
            });
     });
   */

});