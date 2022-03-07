if (window.localStorage.getItem('checkDangNhap') == 1) {
  let dangNhap = document.getElementById('checDangNhaps')
  document.getElementById('personal').addEventListener('mouseover', function () {

    $('#checkDangNhaps').attr('style', 'display: block !important')

  })
  document.getElementById('personal').addEventListener('mouseout', function () {
    $('#checkDangNhaps').attr('style', 'display: none !important')

  })
} 
$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  //  tạo hai nút để điều khiển dừng lại và play slide
  // $('.play').on('click', function () {
  //   owl.trigger('play.owl.autoplay', [1000])
  // });
  // $('.stop').on('click', function () {
  //   owl.trigger('stop.owl.autoplay')
  // });
});
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    };
  });
  

});

