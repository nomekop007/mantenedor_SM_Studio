@extends('plantilla')

@section('contenido')
<br>

<!--formulario-->
 <form>
        @csrf
        <div class="form-row">
            <div class="form-group col-md-12">
                <div class="form row">
                    <div class="form-group col-md-6">
                        <label for="telefono">
                            Telefono
                        </label>
                        <input class="form-control" id="telefono" name="telefono" placeholder="solo numeros" type="text">
                        </input>
                    </div>


                    <div class="form-group col-md-6">
                        <label for="correo electronico">
                            Correo electronico
                        </label>
                        <input class="form-control" id="correo" name="correo electronico" placeholder="correo electronico" type="text">
                        </input>
                    </div>

                        <div class="form-group col-md-6">
                        <label for="direccion">
                            Direccion
                        </label>
                        <input class="form-control" id="direccion" name="direccion" placeholder="direccion" type="text">
                        </input>
                    </div>

              <div class="form-group col-md-6">
                        <label for="redes">
                            Redes sociales
                        </label><br>
                         <select class=" select3 form-control-plaintext" id="redes" name="redes">
                            <option></option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Twitter">Twitter</option>
                            
                        </select>
                    </div>


                    <div class="form-group col-md-1 text-center">
                        <button class="btn btn-info" data-url="{{ route('createContacto') }}" id="btnEnviar3" type="submit">
                            Guardar
                        </button>
                    </div>
                       
                    
                </div>
            </div>
        </div>
    </form>

<!-- tabla -->
<table class="table mi-dataTable text-center">
                <thead class="thead-dark ">
                    <tr>
                        <th scope="col">
                            ID
                        </th>
                        <th scope="col">
                            Telefono
                        </th>
                        <th scope="col">
                            Correo Electronico
                        </th>
                        <th scope="col">
                            Direccion
                        </th>
                        <th scope="col">
                            Redes sociales
                        </th>
                        <th scope="col">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($contactos as $b)
                    <tr>
                        <td>{{ $b->id }}</td>
                        <td>{{ $b->telefono }}</td>
                        <td>{{ $b->correo }}</td>
                        <td>{{ $b->direccion }}</td>
                        <td>
							@if ($b->redSocial == null)sin datos @endif 
                            @if ($b->redSocial != null) {{ $b->redSocial }} @endif
                        </td>
                        <td>
            <button class="btn btn-info btn-edit3" data-id="{{ base64_encode($b->id) }}" data-url="{{ route('getcontacto') }}"><i class="far fa-edit"></i></button>
            <button class="btn btn-danger btn btn-delete3" data-id="{{ base64_encode($b->id) }}" data-url="{{ route('getcontacto') }}"><i class="far fa-trash-alt"></i></button>
                        </td>  
                    </tr>
                    @endforeach
                </tbody>
            </table>
                

  <!-- Modal de editar -->
<div class="modal fade" id="modal_editar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mimodalLabel_editar">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body b_editar col-md-12">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">cancelar</button>
        <button type="button" class="btn btn-info" data-dismiss="modal">guardar cambios</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal de eliminar -->
<div class="modal fade" id="modal_eliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mimodalLabel_eliminar">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body b_eliminar">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">cancelar</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">eliminar</button>
      </div>
    </div>
  </div>
</div>
@stop
