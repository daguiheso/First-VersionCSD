$(function(){
    $('#btnsee').click(function() {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')&& location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
    /* ALERT - SWEET ALERT 2 */
    $('.btn-enviar').on('click', function() {
        swal({
        	title: 'GRACIAS',
        	text: 'su mensaje ha sido enviado, pronto estaremos en contacto con usted.',
        	type: 'success',
        	cancelButtonColor: '#d33',
        	showConfirmButton: 'false',
        	width: '310'
        });
    });
    /* MAIN MOBIL */
    var $mainmobil = $("#main-mobil"),
        $button = $("#btn-hamburger");

    function mostrarMenu() {
        $mainmobil.slideToggle();
        return false;
    }

    // Eventos
    $button.click(mostrarMenu);
});