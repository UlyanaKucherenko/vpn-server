<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\Auth\RegistrationController;
use App\Http\Controllers\Api\Auth\SocialLoginController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\FileController;
use App\Http\Controllers\Api\FirebaseUserTokenController;
use App\Http\Controllers\Api\PlanController;
use App\Http\Controllers\Api\ServerController;
use App\Http\Controllers\Api\SubscriptionController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [LoginController::class, '__invoke'])->middleware('throttle:6,1')->name('login');
Route::post('/logout', [LogoutController::class, '__invoke'])->middleware('auth:api')->name('logout');
Route::post('/registration', [RegistrationController::class, '__invoke'])->name('registration');
Route::post('/social-login', [SocialLoginController::class, '__invoke'])->name('social-login');

Route::post('/forgot-password', [UserController::class, 'forgotPassword'])->middleware('throttle:6,1')->name('forgot-password');
Route::post('/update-forgotten-password', [UserController::class, 'updateForgottenPassword'])->name('update-forgotten-password');
Route::post('/update-password', [UserController::class, 'updatePassword'])->middleware('auth:api')->name('update-password');
Route::post('/update-settings', [UserController::class, 'updateSettings'])->middleware('auth:api')->name('update-settings');

Route::post('/subscribe', [SubscriptionController::class, 'subscribe'])->middleware('auth:api')->name('subscribe');
Route::post('/unsubscribe', [SubscriptionController::class, 'unsubscribe'])->middleware('auth:api')->name('unsubscribe');
Route::get('/current-subscription', [SubscriptionController::class, 'currentSubscription'])->middleware('auth:api')->name('current-subscription');
Route::post('/webhook', [SubscriptionController::class, 'webhook'])->name('webhook');

Route::post('/connect', [ServerController::class, 'connectToServer'])->middleware('auth:api')->name('connect');
Route::post('/disconnect', [ServerController::class, 'disconnectToServer'])->middleware('auth:api')->name('disconnect');
Route::get('/servers-for-user', [ServerController::class, 'serversForUser'])->middleware('auth:api')->name('servers-for-user');
Route::post('/select-server', [ServerController::class, 'selectServer'])->middleware('auth:api')->name('select-server');

Route::post('/save-firebase-token', [FirebaseUserTokenController::class, 'store'])->middleware('auth:api')->name('save-firebase-token');
Route::post('/delete-firebase-token', [FirebaseUserTokenController::class, 'destroy'])->middleware('auth:api')->name('delete-firebase-token');

Route::get('/plan-for-user', [PlanController::class, 'planForUser'])->middleware('auth:api')->name('plan-for-user');
Route::post('/add-payment-method-for-user', [UserController::class, 'addPaymentMethodForUser'])->middleware('auth:api')->name('add-payment-method-for-user');

Route::post('/upload', [FileController::class, 'upload'])->middleware('auth:api')->name('upload');
Route::post('/download', [FileController::class, 'download'])->middleware('auth:api')->name('download');

//ADMIN PANEL
Route::resource('/user', UserController::class)->middleware(['auth:api', 'admin_only'])->only(['index']);
Route::resource('/plan', PlanController::class)->middleware(['auth:api', 'admin_only'])->only(['index', 'store', 'update', 'destroy']);
Route::resource('/server', ServerController::class)->middleware(['auth:api', 'admin_only'])->only(['index', 'store', 'update', 'destroy']);
Route::get('/countries', [CountryController::class, 'index'])->middleware(['auth:api', 'admin_only'])->name('country');



