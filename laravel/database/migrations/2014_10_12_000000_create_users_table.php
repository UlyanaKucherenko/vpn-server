<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->integer('roleId');
            $table->string('password');
            $table->string('hash')->nullable();
            $table->string('stripeCustomerId')->nullable();
            $table->string('stripePaymentMethod')->nullable();
            $table->boolean('allowNotification')->default(1);
            $table->boolean('reconnect')->default(1);
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
        Schema::dropIfExists('users');
    }
};
