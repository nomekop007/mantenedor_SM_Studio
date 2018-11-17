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
                            <input type="file" class="custom-file-input " name="archivo" id="archivo">
                             <label class="custom-file-label" for="archivo">Choose file</label>
                     </div>

                    </div>
                    <div class="form-group col-md-12">
                        <label for="descripcion">
                            Descripcion
                        </label>
                         <textarea class="form-control inp" cols="30" id="descripcion" name="descripcion" rows="5"  placeholder="descripcion"></textarea>
                       
                    </div>
                    
                    <div class="form-group col-md-12">
                        <button class="btn btn-primary" data-url="{{ route('create') }}" id="btnEnviar" type="submit">
                            Guardar
                        </button>
                    </div>
                       
                    
                </div>
            </div>
        </div>
    </form>

<!-- tabla -->
<table class="table mi-dataTable">
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

                    </tr>
                </thead>
                <tbody>
                    @foreach($fotos as $b)
                    <tr>
                        <td>{{ $b->id }}</td>
                        <td>{{ $b->nombre }}</td>
                        <td>{{ $b->descripcion }}</td>
                        <td>{{ $b->autor }}</td>
                        <td>{{ $b->tipo_plano }}</td>
                        <td>{{ $b->archivo }}</td>  
                    </tr>
                    @endforeach
                </tbody>
            </table>



@stop
