<?php


Route::get('/', function () { // inicio
    return view('plantilla');
});



Route::get('m_fotografia','fotografia_controller@index')->name('m_fotografia'); //redirecciona a mantenedor foto + datos
Route::post('createFoto','fotografia_controller@create')->name('createFoto'); //redirecciona al controller que crea foto
Route::post('getfoto','fotografia_controller@getByID')->name('getfoto'); // redirecciona al controller a la funcino que busca foto
Route::post('DeleteFoto','fotografia_controller@delete')->name('DeleteFoto'); // elimina foto



Route::get('m_video','video_controller@index')->name('m_video'); //redirecciona a mantenedor video + datos

Route::post('createVideo','video_controller@create')->name('createVideo'); //redirecciona al controller que crea video
Route::post('getvideo','video_controller@getByID')->name('getvideo'); // redirecciona al controller a la funcion que busca video
Route::post('DeleteVideo','video_controller@delete')->name('DeleteVideo'); // elimina video



Route::get('m_contacto','contacto_controller@index')->name('m_contacto'); //redirecciona a mantenedor contacto + datos
Route::post('createContacto','contacto_controller@create')->name('createContacto'); //redirecciona al controller que crea contacto
Route::post('getcontacto','contacto_controller@getByID')->name('getcontacto'); // redirecciona al controller a la funcino que busca video
Route::post('DeleteContacto','contacto_controller@delete')->name('DeleteContacto'); // elimina contacto

// Route::post('updateContacto','contacto_controller@update')->name('updateContacto'); // editar contacto
