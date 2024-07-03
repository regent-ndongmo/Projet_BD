<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RendezVous extends Model
{
    use HasFactory;

    protected $guarded=[];

    public static $rules = [
        'photographe_id' => 'required',
        'contrat_id' => 'required',
        'date' => 'required',
        'heure_debut' => 'required',
        'heure_fin' => 'required',
        'status' => 'required|max:255',
    ];

    //messages d'erreur
    public static $messages = [
        'photographe_id.required' => 'Le champ photographe_id est requis.',

        'date.required' => 'Le champ date est requis.',

        'contrat_id.required' => 'Le champ contrat_id est requis.',

        'heure_debut.required' => 'Le champ heure_debut est requis.',

        'heure_fin.required' => 'Le champ heure_fin est requis.',

        'status.required' => 'Le champ status est requis.',
    ];

    public function contrat(){
        return $this->belongsTo(Contrat::class);
    }

    public function photographe(){
        return $this->belongsTo(Photographe::class);
    }
}
