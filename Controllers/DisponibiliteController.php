<?php

namespace App\Http\Controllers;

use App\Models\Disponibilite;
use Illuminate\Http\Request;

class DisponibiliteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $disponibilite = Disponibilite::all();
        return response()->json($disponibilite);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(Disponibilite::$rules, Disponibilite::$messages);

        $disponibilite = Disponibilite::create($request->all());

        return response()->json($disponibilite, 201); // Retourne la catégorie créée avec le statut HTTP 201 (Created);
    }

    /**
     * Display the specified resource.
     */
    public function show(Disponibilite $disponibilite)
    {
        return response()->json($disponibilite, 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Disponibilite $disponibilite)
    {
        $request->validate(Disponibilite::$rules, Disponibilite::$messages);
        return response()->json($disponibilite->update($request->all()), 200,);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Disponibilite $disponibilite)
    {
        return response()->json($disponibilite->delete(), 200);
    }
}
