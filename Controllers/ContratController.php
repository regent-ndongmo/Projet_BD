<?php

namespace App\Http\Controllers;

use App\Models\Contrat;
use Illuminate\Http\Request;

class ContratController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contrat = Contrat::all();
        return response()->json($contrat);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(Contrat::$rules, Contrat::$messages);

        $contrat = Contrat::create($request->all());

        return response()->json($contrat, 201); // Retourne la catégorie créée avec le statut HTTP 201 (Created);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contrat $contrat)
    {
        return response()->json($contrat, 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contrat $contrat)
    {
        $request->validate(Contrat::$rules, Contrat::$messages);
        return response()->json($contrat->update($request->all()), 200,);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contrat $contrat)
    {
        return response()->json($contrat->delete(), 200);
    }
}
