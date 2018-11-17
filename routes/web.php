<?php


Route::get('/', function () { // inicio
    return view('plantilla');
});

Route::get('m_fotografia','fotografia_controller@index')->name('m_fotografia'); //redirecciona a mantenedor foto + datos

Route::post('create','fotografia_controller@create')->name('create'); //redirecciona al controller que crea
