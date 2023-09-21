@extends('layout')

@section('content')

<h2>
    {{$item['title']}}
</h2>
<h3>
    {{$item['price']}}
</h3>    
<p>
  {{$item['description']}}
</p>   

@endsection