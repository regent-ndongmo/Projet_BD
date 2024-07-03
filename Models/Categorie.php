<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory  ;

    // public function avoir(){
    //     return $this->hasMany(Categorie::class);
    // }

    protected $guarded=[];

    //regles de validations
    public static $rules = [
        'categorie' => 'required|unique:categories,categorie|max:255',
    ];

    //messages d'erreur
    public static $messages = [
        'categorie.required' => 'Le champ catégorie est requis.',
        'categorie.unique' => 'La catégorie existe déjà.',
        'categorie.max' => 'La catégorie ne doit pas dépasser :max caractères.',
    ];

    public function photo(){
        return $this->hasMany(Photo::class);
    }

    // Relation avec le modèle Photographe via la table pivot 'avoirs'
    public function photographes(){
        return $this->belongsToMany(Photographe::class, 'avoirs', 'categorie_id', 'photographe_id');
    }
}
