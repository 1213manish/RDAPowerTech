<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return view('contact');
    }

    public function send(Request $request)
    {
        $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email',
            'phone'   => 'required|string|max:20',
            'subject' => 'required|string',
            'message' => 'required|string|min:10',
        ]);

        // TODO: Send email / store in DB
        return back()->with('success', 'Thank you! Your message has been sent.');
    }
}
