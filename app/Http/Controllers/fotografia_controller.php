<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


//declarar archivo drink
use App\fotografia;
class fotografia_controller extends Controller
{


    public function index() // ver fotos
    {
    	$fotos = fotografia::all(); // select * from fotos
    		return view('m_fotografia')->With('fotos',$fotos);
    }


    public function create(Request $Request) // crear foto
    {
    	$foto = new fotografia;
    	$foto->nombre = $Request->nombre;
    	$foto->descripcion = $Request->descripcion;
    	$foto->autor = $Request->autor;
    	$foto->tipo_plano = $Request->tipo_plano;
    	$foto->archivo = $Request->archivo;
    	
        
    	//guardar en la base de datos
    	if ($foto->save()) {
    		return "ok";
    	} else{
    		return "error";
    	}
    	
        //return fotografia::all();
    	return view('plantilla');
    }


     public function getByID(request $request) //buscar foto
    {
    	$id = base64_decode($request->id);
    	$foto = fotografia::find($id);
    	return $foto;
    }
}
