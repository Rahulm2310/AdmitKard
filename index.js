$(document).ready(() => {
  localStorage.setItem('defaultOtp', '1234');

  $('.alert-container')
    .html(`<div class="alert alert-dismissible alert-success">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>OTP sent successfully!</strong>
  </div>`);

  $(document).on('click', '.close', function () {
    $(this).parent().css('display', 'none');
  });

  var urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get('mobile'));
  $('.mobile-number').text(
    `${urlParams.get('numCode')}-${urlParams.get('mobile')}`
  );

  $('.verify-otp').on('click', () => {
    let userOtp = $('.otp-value').val();
    console.log('OTP : ', userOtp);
    if (userOtp === localStorage.getItem('defaultOtp')) {
      $('.alert-container')
        .html(`<div class="alert alert-dismissible alert-success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>OTP Verified</strong>
      </div>`);
    } else {
      $('.alert-container')
        .html(`<div class="alert alert-dismissible alert-danger">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>Incorrect OTP</strong>
      </div>`);
    }
  });

  function goBack() {
    window.history.back();
  }

  $('.go-back').on('click', () => {
    goBack();
  });
});
