<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//declarar archivo contacto
use App\contacto;
class contacto_controller extends Controller
{
   
    public function index() // ver contactos
    {
    	$contactos = contacto::all(); // select * from contacto
    		return view('m_contacto')->With('contactos',$contactos);
    }


    public function create(Request $Request) // crear contacto
    {
    	$contacto = new contacto;
    	$contacto->telefono = $Request->telefono;
    	$contacto->correo = $Request->correo;
    	$contacto->direccion = $Request->direccion;
    	$contacto->redSocial = $Request->redSocial;    	
        
    	//guardar en la base de datos
    	if ($contacto->save()) {
    		return "ok";
    	} else{
    		return "error";
    	}
    	
        
    	return view('m_contacto');
    }


     public function getByID(request $request) //buscar contacto
    {
    	$id = base64_decode($request->id);
    	$contacto = contacto::find($id);
    	return $contacto;
    }

}
