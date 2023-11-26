<?php

namespace App\Services;

use App\Mail\ForgotPassword;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordService
{
    /**
     * @param string $email
     * @return bool
     * @throws \Exception
     */
    public function sendLink(string $email): bool
    {
        $hash = md5((random_bytes(10)));

        $this->updateUserHash($email, $hash);
        return $this->sendMailWithLink($email, $hash);
    }

    public function updateUserHash(string $email, string $hash): bool
    {
        return (bool)User::query()->where('email', '=', $email)
            ->update(['hash' => $hash]);
    }

    public function sendMailWithLink(string $email, string $hash): bool
    {
        try {
            Mail::to($email)->queue(new ForgotPassword($email, $hash));
            return true;
        } catch (\Exception $exception) {
            \Log::error("sendMailWithLink failed" . $exception->getMessage());
            return false;
        }
    }

    public function updateForgottenPassword(array $data): bool
    {
        $user = User::query()->where('email', '=', $data['email'])->first();
        if ($user->hash === $data['hash']) {
            return (bool)$user->update([
                'password' => bcrypt($data['password']),
                'hash' => null
            ]);
        }
        return false;
    }
}
