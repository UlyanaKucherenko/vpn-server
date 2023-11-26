<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgotPassword extends Mailable
{
    use Queueable, SerializesModels;

    private string $email;
    private string $hash;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $email, string $hash)
    {
        $this->hash = $hash;
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Forgot password')
            ->from('info@localriders.biz')
            ->view('emails.forgot_password', ['hash' => $this->hash, 'email' => $this->email]);
    }
}
