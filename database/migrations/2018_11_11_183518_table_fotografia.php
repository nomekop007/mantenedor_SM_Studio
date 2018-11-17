<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TableFotografia extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('fotografias', function (Blueprint $table) {
            //declarar variables que migraran a la base de datos como tabla
            $table->increments('id');
            $table->String('nombre');
            $table->String('descripcion');
            $table->String('autor');
            $table->String('tipo_plano');
            $table->String('archivo');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fotografias');
    }
}
