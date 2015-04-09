$('li.warning.confirm button').on('click', function() {
  swal({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    closeOnConfirm: false
  },
  function() {
    swal('Deleted!', 'Your file has been deleted!', 'success');
  });
});