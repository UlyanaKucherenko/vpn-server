<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class DeleteImage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete_image';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete test images';


    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        Log::info('START command delete_image');

        Storage::deleteDirectory('/images');

        Log::info('FINISH command delete_image');
    }
}
