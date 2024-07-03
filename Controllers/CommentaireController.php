<?php

namespace App\Http\Controllers;

use App\Models\Commentaire;
use Illuminate\Http\Request;

class CommentaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $commentaire = Commentaire::all();
        return response()->json($commentaire);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(Commentaire::$rules, Commentaire::$messages);

        $commentaire = Commentaire::create($request->all());

        return response()->json($commentaire, 201); // Retourne la catégorie créée avec le statut HTTP 201 (Created);
    }

    /**
     * Display the specified resource.
     */
    public function show(Commentaire $commentaire)
    {
        return response()->json($commentaire, 200);

    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Commentaire $commentaire)
    {
        $request->validate(Commentaire::$rules, Commentaire::$messages);
        return response()->json($commentaire->update($request->all()), 200,);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Commentaire $commentaire)
    {
        return response()->json($commentaire->delete(), 200);
    }
}
