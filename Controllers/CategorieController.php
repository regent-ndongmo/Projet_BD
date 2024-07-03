<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categorie::all();
        return response()->json($categories);
    }



    public function store(Request $request)
    {
        $request->validate(Categorie::$rules, Categorie::$messages);

        $category = Categorie::create([
            'categorie' => $request->input('categorie')
        ]);

        return response()->json($category, 201); // Retourne la catégorie créée avec le statut HTTP 201 (Created);
    }

    /**
     * Display the specified resource.
     */
    public function show(Categorie $categorie)
    {
        return response()->json($categorie, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function update(Request $request, Categorie $categorie)
    {
        $request->validate(Categorie::$rules, Categorie::$messages);

        return response()->json($categorie->update($request->all()), 200,);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categorie $categorie)
    {
        return response()->json($categorie->delete(), 200);
    }
}
