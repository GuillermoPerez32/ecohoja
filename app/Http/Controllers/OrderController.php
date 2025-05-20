<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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

        $request->validate([
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'required',
            'products' => 'required|array',
        ]);

        $data = $request->only([
            'email',
            'phone',
            'address',
        ]);


        $products = $request->products;

        $order = Order::create($data);

        $products = collect($products)->map(function ($product) {
            return [
                'product_id' => $product['id'],
                'quantity' => $product['quantity'],
                'price' => Product::where('id', $product['id'])->first()->price,
            ];
        })->toArray();

        $order->products()->attach($products);

        return redirect()->route('home')->with('success', 'Pedido realizado correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
