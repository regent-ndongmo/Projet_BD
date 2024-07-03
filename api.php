<?php

use app\Http\Controllers\Auth;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\ContratController;
use App\Http\Controllers\DisponibiliteController;
use App\Http\Controllers\PhotographeController;
use App\Http\Controllers\RendezVousController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/login', [AuthenticatedSessionController::class, 'store'])->name('login');
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

// Routes pour l'enregistrement de nouveaux utilisateurs
Route::post('/register', [RegisteredUserController::class, 'store'])->name('register');

// Routes pour la réinitialisation de mot de passe
Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');
Route::post('/reset-password', [NewPasswordController::class, 'store'])->name('password.update');

// Routes pour la vérification d'email
Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])->name('verification.verify');
Route::post('/email/verification-notification', [VerifyEmailController::class, 'store'])->name('verification.send');

// D'autres routes pour gérer d'autres fonctionnalités liées à l'authentification


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('photographe', PhotographeController::class);
Route::apiResource('categorie', CategorieController::class);
Route::apiResource('contrat', ContratController::class);
Route::apiResource('disponibilite', DisponibiliteController::class);
Route::apiResource('commentaire', CommentaireController::class);
Route::apiResource('rendez-vous', RendezVousController::class);
