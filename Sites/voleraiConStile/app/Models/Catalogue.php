<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Catalogue extends Model
{
    use HasFactory;
    protected $table = 'catalogue';

    public static function find($id){
        $catalogue = self::all();
        foreach($catalogue as $item){
            if($item['id'] == $id) {
                return $item;
            }
        }
    } 

}
