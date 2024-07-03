<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disponibilite extends Model
{
    use HasFactory;

    protected $guarded=[];

    public static $rules = [
        'photographe_id' => 'required',
        'Date' => 'required',
        'Heure' => 'required',
    ];

    //messages d'erreur
    public static $messages = [
        'photographe_id.required' => 'Le champ photographe_id est requis.',

        'Date.required' => 'Le champ Date est requis.',

        'Heure.required' => 'Le champ Heure est requis.',
    ];

    public function photographe(){
        return $this->belongsTo(Photographe::class);
    }
}
