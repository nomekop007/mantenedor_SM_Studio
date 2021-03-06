@extends('plantilla')

@section('contenido')
<br>


<!--formulario -->
    <form>
        @csrf
        <div class="form-row">
            <div class="form-group col-md-12">
                <div class="form row">
                    <div class="form-group col-md-6">
                        <label for="nombre">
                            Nombre foto
                        </label>
                        <input class="form-control" id="nombre" name="nombre" placeholder="Nombre" type="text">
                        </input>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="autor">
                            Autor
                        </label>
                        <input class="form-control" id="autor" name="autor" placeholder="autor" type="text">
                        </input>
                    </div>
              <div class="form-group col-md-6">
                        <label for="tipo_plano">
                            Tipo de plano
                        </label><br>
                         <select class=" select js-example-basic-multiple js-states form-control" id="tipo_plano" name="tipo_plano" multiple="multiple">
                            <option></option>
                            <optgroup label="Planos primarios">
                            <option value="Plano General">Plano General</option>
                            <option value="Plano Figura">Plano Figura</option>
                            <option value="Plano Americano o ¾">Plano Americano o ¾</option>
                            <option value="Plano Medio">Plano Medio</option>
                            <option value="Plano Medio Corto">Plano Medio Corto</option>
                            <option value="Primer Plano">Primer Plano</option>
                            <option value="Primerísimo Primer Plano">Primerísimo Primer Plano</option>
                            <option value="Plano Detalle">Plano Detalle</option>
                            </optgroup>

                            <optgroup label="Planos secundarios">
                            <option value="Plano Cenital">Plano Cenital</option>
                            <option value="Plano Picado">Plano Picado</option>
                            <option value="Plano Contrapicado">Plano Contrapicado</option>
                            <option value="Plano Nadir">Plano Nadir</option>
                            <option value="Plano Dorsal">Plano Dorsal</option>
                            <option value="Plano Escorzo">Plano Escorzo</option>
                            <option value="Plano Perfil">Plano Perfil</option>
                            <option value="Plano Frontal">Plano Frontal</option>
                            <option value="Plano Holandés">Plano Holandés</option>                         
                            </optgroup>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                   
                         <label for="archivo">
                            Archivo
                        </label>
                     <div class="custom-file">
                            <input type="file" class="form-control-file" name="archivo" id="archivo">

                             <label class="custom-file-label" for="archivo">ingrese archivo</label>
                     </div>

                    </div>
                    <div class="form-group col-md-12">
                        <label for="descripcion">
                            Descripcion
                        </label>
                         <textarea class="form-control inp" cols="30" id="descripcion" name="descripcion" rows="5" maxlength="190" placeholder="descripcion"></textarea>
                       
                    </div>
                    
                    <div class="form-group col-md-1 text-center">
                        <button class="btn btn-info bg-amarillo" data-url="{{ route('createFoto') }}" id="btnEnviar" type="submit">
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
                            Nombre
                        </th>
                        <th scope="col">
                            descripcion
                        </th>
                        <th scope="col">
                            autor
                        </th>
                        <th scope="col">
                            tipo de plano
                        </th>
                        <th scope="col">
                            archivo
                        </th>
                        <th scope="col">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($fotos as $b)
                    <tr>
                        <td>{{ $b->id }}</td>
                        <td>{{ $b->nombre }}</td>
                        <td> 
                    <a class="btn-descripcion" data-id="{{ base64_encode($b->id) }}" data-url="{{ route('getfoto') }}">
                        <i class="far fa-eye color"></i></i>
                    </a>
                        </td>
                        <td>{{ $b->autor }}</td>
                        <td>{{ $b->tipo_plano }}</td>
                        <td>
                          <a data-toggle="modal" data-target=".bd-example-modal-lg"><i class="far fa-file-image color"></i></a>
                        </td>


                        <td>

                          
            <button class="btn btn-info btn-edit" data-id="{{ base64_encode($b->id) }}" data-url="{{ route('getfoto') }}"><i class="far fa-edit"></i></button>
            <button class="btn btn-danger btn btn-delete" data-id="{{ base64_encode($b->id) }}" data-url="{{ route('getfoto') }}"><i class="far fa-trash-alt"></i></button>

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
        <button type="button" class="btn btn-danger" data-dismiss="modal" id="eliminar" data-id="{{ base64_encode($b->id) }}" data-url="{{ route('DeleteFoto') }}">eliminar</button>
      </div>
    </div>
  </div>
</div>


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

<!--Modal descripcion -->
<div class="modal fade" id="modal_des" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mimodalLabel_des">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body b_des">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">cerrar</button>

      </div>
    </div>
  </div>
</div>


<!--Modal imagen -->
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="imagen">
      <img src="{{ asset('images/dragon.jpg') }}">
      </div>
    </div>
  </div>
</div>



@stop
