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
                            Nombre
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
                        </label>
                         <select class="form-control" id="tipo_plano" name="tipo_plano">
                            <option value="Plano General">
                                Plano General
                            </option>
                            <option value="Plano Figura">
                                Plano Figura
                            </option>
                            <option value="Plano Americano o ¾">
                                Plano Americano o ¾
                            </option>
                            <option value="Plano Medio">
                                Plano Medio
                            </option>
                            <option value="Plano Medio Corto">
                                Plano Medio Corto
                            </option>
                            <option value="Primer Plano">
                                Primer Plano
                            </option>
                            <option value="Primerísimo Primer Plano">
                                Primerísimo Primer Plano
                            </option>
                            <option value="Plano Detalle">
                                Plano Detalle
                            </option>
                            <option value="Plano Cenital">
                                Plano Cenital
                            </option>
                            <option value="Plano Picado">
                                Plano Picado
                            </option>
                            <option value="Plano Nadir">
                                Plano Nadir
                            </option>
                            <option value="Plano Contrapicado">
                                Plano Contrapicado
                            </option>
                            <option value="Plano Escorzo">
                                Plano Escorzo
                            </option>
                            <option value="Plano Perfil">
                                Plano Perfil
                            </option>
                            <option value="Plano Frontal">
                                Plano Frontal
                            </option>
                            <option value="Plano Holandés">
                                Plano Holandés
                            </option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                   
                         <label for="archivo">
                            Archivo
                        </label>
                     <div class="custom-file">
                            <input type="file" class="form-control-file" name="archivo" id="archivo">
                             <label class="custom-file-label" for="archivo">Choose file</label>
                     </div>

                    </div>
                    <div class="form-group col-md-12">
                        <label for="descripcion">
                            Descripcion
                        </label>
                         <textarea class="form-control inp" cols="30" id="descripcion" name="descripcion" rows="5"  placeholder="descripcion"></textarea>
                       
                    </div>
                    
                    <div class="form-group col-md-1 text-center">
                        <button class="btn btn-info" data-url="{{ route('create') }}" id="btnEnviar" type="submit">
                            Guardar
                        </button>
                    </div>
                       
                    
                </div>
            </div>
        </div>
    </form>

<!-- tabla -->
<table class="table mi-dataTable text-center">
                <thead class="thead-dark">
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
                            tipo plano
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
                    <a class="btn-comentario" data-id="{{ base64_encode($b->id) }}" data-url="{{ route('getfoto') }}">
                        <i class="far fa-eye"></i></i>
                    </a>
                        </td>
                        <td>{{ $b->autor }}</td>
                        <td>{{ $b->tipo_plano }}</td>
                        <td>{{ $b->archivo }}</td>
                        <td>
            <button class="btn btn-info btn-edit" data-id="{{ base64_encode($b->id) }}" data-url="{{ route('getfoto') }}"><i class="far fa-edit"></i></button>
            <button class="btn btn-danger btn btn-delete" data-id="{{ base64_encode($b->id) }}" data-url="{{ route('getfoto') }}"><i class="far fa-trash-alt"></i></button>
                        </td>  
                    </tr>
                    @endforeach
                </tbody>
            </table>
                
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
        <button type="button" class="btn btn-info" data-dismiss="modal">editar</button>
      </div>
    </div>
  </div>
</div>

<!--Modal comentario -->
<div class="modal fade" id="modal_comentario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mimodalLabel_comentario">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body b_comentario">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">cerrar</button>

      </div>
    </div>
  </div>
</div>


@stop
