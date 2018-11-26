<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
            <link href="{{ asset('css/bootstrap.css')}}" rel="stylesheet" type="text/css">
             <link href="{{ asset('css/dataTables.min.css') }}" rel="stylesheet">
             <link href="{{ asset('css/select2-bootstrap.css') }}" rel="stylesheet">
             <link href="{{ asset('css/select2.css') }}" rel="stylesheet">
             <link href="{{ asset('css/menu.css')}}" rel="stylesheet" type="text/css">
             <!--iconos-->
                <link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" rel="stylesheet">
                <!-- formas-->
                    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600" rel="stylesheet">
                    <!--seguridad -->
                        <meta content="{{ csrf_token() }}" name="csrf-token">
                            <title>
                                SM STUDIO
                            </title>
    </head>
    <body class="plomo">
        <div class="wrapper">
            <!-- menu vertical -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>
                        SM STUDIO
                    </h3>
                </div>
                <ul class="list-unstyled components">
                    <li>
                        <a href="{{ route('m_fotografia') }}">
                            FOTOGRAFIAS
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('m_video') }}">
                            VIDEOS
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('m_contacto') }}">
                            CONTACTO
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- contenido ventanas -->
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-narnaja">
                    <div class="container-fluid">
                        <button class="btn btn-info" id="sidebarCollapse" type="button">
                            <i class="fas fa-bars"></i>
                            </i>
                        </button>
                    </div>
                </nav>
                @yield('contenido')
            </div>
        </div>



<script src="{{ asset('js/jquery-3.3.1.min.js')}}">
</script>
<script src="{{ asset('js/select2.min.js')}}">
</script>
<script src="{{ asset('js/select2_locale_es.js')}}">
</script>
<script src="{{ asset('js/popper.min.js')}}">
</script>
<script src="{{ asset('js/bootstrap.min.js')}}">
</script>
 <script src="{{ asset('js/dataTables.min.js') }}">
 </script>
<script src="{{ asset('js/generico.js')}}">
</script>
<script src="{{ asset('js/menu.js')}}">
</script>
<script src="{{ asset('js/fotografia.js')}}">
</script>
<script src="{{ asset('js/video.js')}}">
</script>
<script src="{{ asset('js/contacto.js')}}">
</script>
<script src="{{ asset('js/jquery.mCustomScrollbar.concat.min.js') }}">
</script>


    </body>
</html>
