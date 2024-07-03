<?php

namespace App\Http\Controllers;

use App\Models\RendezVous;
use Illuminate\Http\Request;

class RendezVousController extends Controller
{
      /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rendez_vous = RendezVous::all();
        return response()->json($rendez_vous);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(RendezVous::$rules, RendezVous::$messages);

        $rendez_vous = RendezVous::create($request->all());

        return response()->json($rendez_vous, 201); // Retourne la catégorie créée avec le statut HTTP 201 (Created);
    }

    /**
     * Display the specified resource.
     */
    public function show(RendezVous $rendez_vous)
    {
        return response()->json($rendez_vous, 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RendezVous $rendez_vous)
    {
        $request->validate(RendezVous::$rules, RendezVous::$messages);
        return response()->json($rendez_vous->update($request->all()), 200,);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RendezVous $rendez_vous)
    {
        return response()->json($rendez_vous->delete(), 200);
    }
}
