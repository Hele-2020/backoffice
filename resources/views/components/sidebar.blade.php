<nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidebar">
    <div class="scroll-wrapper scrollbar-inner" style="position: relative;">
        <div class="scrollbar-inner scroll-content" style="height: 1024px; margin-bottom: 0px; margin-right: 0px; max-height: none;">
            <!-- Brand -->
            <div class="sidenav-header  align-items-center">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
            </div>
            <div class="navbar-inner">
                <!-- Collapse -->
                <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                    <h6 class="navbar-heading p-0 text-muted">
                        {{ __('Features') }}
                    </h6>
                    <!-- Nav items -->
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/') }}">Dashboard</a>
                        </li>
                    </ul>
                    <hr class="my-3" />
                    @auth
                    <h6 class="navbar-heading p-0 text-muted">
                        {{ Auth::user()->email }}
                    </h6>
                    @endauth
                    <ul class="navbar-nav">
                        @guest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                        </li>
                        @endif
                        @else
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </a>
                        </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>
