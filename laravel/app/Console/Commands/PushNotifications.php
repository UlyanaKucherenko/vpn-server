<?php

namespace App\Console\Commands;

use App\Jobs\SendPushNotification;
use App\Models\Subscription;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class PushNotifications extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send_push_notifications';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send push notifications';


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
        Log::info('START command send_push_notifications');
        $userIds = Subscription::query()
            ->whereDate('expiredAt', '>=', now()->addDay())
            ->whereDate('expiredAt', '<=', now()->addDays(2))
            ->whereNull('deletedAt')
            ->pluck('userId')
            ->values()
            ->toArray();

        foreach ($userIds as $userId) {
            SendPushNotification::dispatch($userId);
        }

        Log::info('FINISH command send_push_notifications');
    }
}
