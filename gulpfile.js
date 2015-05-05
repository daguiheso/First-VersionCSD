var elixir = require('laravel-elixir');


elixir(function(mix) {
    mix.less("style.less", "assets/css");

    mix.scripts([
    	"jquery/jquery.min.js",
    	"bootstrap/bootstrap.min.js",
    	"sweetalert2/sweetalert2.min.js",
    	"disqus/disqus.js",
    	"app.js"
    ], "assets/js", "resources/assets/js");

});