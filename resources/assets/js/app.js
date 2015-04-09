$('.btn-enviar').on('click', function() {
  swal({
    title: 'GRACIAS',
    text: 'su mensaje ha sido enviado, pronto estaremos en contacto con usted.',
    type: 'success',
    cancelButtonColor: '#d33',
    showConfirmButton: 'false',
    width: '310',
  });
});