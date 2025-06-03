<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('pickups', function (Blueprint $table) {
            $table->foreignId('courier_id')
                  ->nullable() // A pickup might not be assigned immediately, or you might want unassigned pool
                  ->after('user_id') // Place it after the user_id column for neatness
                  ->constrained('users') // This assumes your couriers are also in the 'users' table (with a 'courier' role)
                  ->onDelete('set null'); // If a courier account is deleted, set courier_id to null (or cascade, restrict, etc. based on your rules)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pickups', function (Blueprint $table) {
            // Ensure the constraint name matches what Laravel generates, or use dropConstrainedForeignId
            // You can find the name in your DB schema after running the migration if needed.
            // A common pattern is 'pickups_courier_id_foreign'.
            // $table->dropForeign(['courier_id']); 
            $table->dropConstrainedForeignId('courier_id'); // Simpler way if using Laravel 8+ conventions
        });
    }
};