<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//declarar archivo video
use App\video;

class video_controller extends Controller
{
       public function index() // ver videos
    {
    	$videos = video::all(); // select * from videos
    		return view('m_video')->With('videos',$videos);
    }


    public function create(Request $Request) // crear video
    {
    	$video = new video;
    	$video->nombre = $Request->nombre;
    	$video->descripcion = $Request->descripcion;
    	$video->autor = $Request->autor;
    	$video->formato = $Request->formato;
    	$video->tipo_plano = $Request->tipo_plano;
    	$video->archivo = $Request->archivo;
    	
        
    	//guardar en la base de datos
    	if ($video->save()) {
    		return "ok";
    	} else{
    		return "error";
    	}
    	
      
    	return view('m_video');
    }


     public function getByID(request $request) //buscar video
    {
    	$id = base64_decode($request->id);
    	$video = video::find($id);
    	return $video;
    }


     public function delete(request $request) //eliminar video
    {
        $id = base64_decode($request->id);
        $video = video::find($id);
        
        if ($video->delete()) {
            return "ok";
        } else{
            return "error";
        }
    }
}
