<?php

namespace App\Http\Controllers;

use App\Models\Photographe;
use Illuminate\Http\Request;

class PhotographeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $photographes = Photographe::all();
        return  response()->json($photographes);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data=$request->all();
        $new=Photographe::create($data);
        return  response()->json($new);
    }

    /**
     * Display the specified resource.
     */
    public function show(Photographe $photographe)
    {
        return  response()->json($photographe);
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Photographe $photographe)
    {
        $updated=$photographe->update($request->all());
        return  response()->json($updated);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Photographe $photographe)
    {
        return  response()->json($photographe->delete());
    }
}
