@extends('layout')

@section('content')
    

<h1>{{$heading}}</h1>

@unless(count($products) == 0)
    @foreach ($products as $item)
    <h2>
        <a href="/catalogue/{{$item['id']}}">
            {{$item['title']}}
        </a>
    </h2>
    <h3>
        {{$item['price']}}
    </h3>    
    <p>
      {{$item['description']}}
    </p>    
    @endforeach
@else 
    <h2>'No Product Avaliable'</h2>
@endunless    

@endsection