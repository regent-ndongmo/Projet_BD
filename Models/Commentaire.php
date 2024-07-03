<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commentaire extends Model
{
    use HasFactory;

    protected $guarded=[];

     //regles de validations
     public static $rules = [
        'nom_client' => 'required|max:255',
        'ville_client' => 'required|max:255',
        'description' => 'required|max:255',
        'photographe_id' => 'required',

    ];

    //messages d'erreur
    public static $messages = [
        'nom_client.required' => 'Le champ nom_client est requis.',
        'nom_client.max' => 'La nom_client ne doit pas dépasser :max caractères.',

        'ville_client.required' => 'Le champ ville_client est requis.',
        'ville_client.max' => 'La ville_client ne doit pas dépasser :max caractères.',

        'description.required' => 'Le champ description est requis.',
        'description.max' => 'La description ne doit pas dépasser :max caractères.',

        'photographe_id.required' => 'Le champ photographe_id est requis.',
    ];

    public function photographe(){
        return $this->belongsTo(Photographe::class);
    }
}
