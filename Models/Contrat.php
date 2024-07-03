<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contrat extends Model
{
    use HasFactory;

    protected $guarded=[];

    //regles de validations
    public static $rules = [
       'photographe_id' => 'required',
       'date' => 'required',
       'status_paiement' => 'required|max:255',
   ];

   //messages d'erreur
   public static $messages = [
       'status_paiement.required' => 'Le champ status_paiement est requis.',

       'date.required' => 'Le champ date est requis.',

       'photographe_id.required' => 'Le champ photographe_id est requis.',
   ];

    public function rendez_vous(){
        return $this->hasMany(RendezVous::class);
    }
}
