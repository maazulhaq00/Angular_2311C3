<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    //


    function addProducts(Request $request):void{
        DB::table('products')->insert([
            'prodName' => $request->prodName,
            'prodPrice' => $request->prodPrice,
            'prodDesc' => $request->prodDesc
        ]);
     
    }

    function getProducts(){
        $products = DB::table('products')->get();

        return response()->json($products);

    }

    function updateProduct(Request $request, $id)
    {
        $updated = DB::table('products')
            ->where('id', $id)
            ->update([
                'prodName' => $request->prodName,
                'prodPrice' => $request->prodPrice,
                'prodDesc' => $request->prodDesc
            ]);
    
        if ($updated) {
            return response()->json(['message' => 'Product updated successfully']);
        }
    }
    

    function deleteProduct($id)
{
    $deleted = DB::table('products')->where('id', $id)->delete();

    if ($deleted) {
        return response()->json(['message' => 'Product deleted successfully']);
    }
}


}
