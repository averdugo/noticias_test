<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $data = $request->all();
        
        foreach ($data as $key => $d) {
            News::firstOrCreate(
                ["title" => $d['title']],
                [
                    "title" => $d['title'],
                    "author" => $d['author'] ?? "Anonimo",
                    "url" => $d['url'],
                    "urlToImage" => $d['urlToImage'],
                    "published_at" => Carbon::create($d["publishedAt"])
                ]
            );
        }

        return true;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return News::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $new = News::find($id);
        $new->fillable($request->all());
        $new->save();
        return $new;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        return News::find($id)->delete();
    }
}
