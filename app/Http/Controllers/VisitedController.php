<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Visited, News};
use Inertia\Inertia;

class VisitedController extends Controller
{
    public function index()
    {
        $visited = Visited::with("news")->orderBy("counter", "desc")->get();
        $data = [];
        foreach ($visited as $key => $v) {
            array_push($data, $v->news);
        }
        return Inertia::render('Visited', compact('data'));
    }

    public function store(Request $request){
        $news = News::where('title',$request->title)->first();

        $visited = Visited::firstOrNew(['news_id' => $news->id]);
        $visited->counter = ($visited->counter + 1);
        $visited->save();

        return true;
    }
}
