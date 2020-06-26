@extends('layouts.app')

@section('title', __('Points d\'intérêt'))

@section('header-buttons')
<form class="d-inline-flex" action="" method="GET">
    <div class="input-group">
        <input class="form-control form-control-alternative form-control-sm" type="text" name="q" value="{{ request()->input('q') }}" placeholder="{{ __('Recherche') }}" role="searchbox" />
        <div class="input-group-append">
            <button class="btn btn-sm btn-outline-neutral" type="submit">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div>
</form>
<a href="{{ route('map.create') }}" class="btn btn-sm btn-neutral">{{ __('Nouveau') }}</a>
@endsection

@section('content')
<div class="row justify-content-center">
    <div class="col">
        <div class="card">
            <div class="card-header border-0">
                <h3 class="mb-0">{{ __('Points d\'intérêt') }}</h3>
            </div>

            <div class="table-responsive">
                <table class="table align-items-center">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col" class="sort" data-sort="name">Nom</th>
                            <th scope="col" class="sort" data-sort="address">Adresse</th>
                            <th scope="col" class="sort" data-sort="site">Site</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="list">
                        @foreach ($pois as $poi)
                            <tr>
                                <td scope="row" class="name">
                                    {{ $poi->name }}
                                </td>
                                <td scope="" class="address">
                                    {{ $poi->address }}
                                </td>
                                <td scope="row" class="site">
                                    <a href="{{ $poi->site }}" class="btn-link" target="_blank">
                                        {{ $poi->site }}
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </td>
                                <td class="text-right">
                                    <a class="btn btn-outline-warning" href="{{ route('map.edit', $poi) }}">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
