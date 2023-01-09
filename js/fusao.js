


$('.criapao').slick({
  dots: false,
  autoplay: true,
  infinite: true,
  arrows: false,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*  outro */



$('.autoplay').slick({
  dots: false,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



  var typed2 = new Typed('#typed2', {
    strings: ['Designer Gráfico',' Designer Web',
      'Programador <strong>Júnior</strong>',
      'Técnico help Desk'],
    typeSpeed: 200,
    backSpeed: 10,
    fadeOut: true,
    loop: true
  });




  

  $('.carromono').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true
  });




  $('.tentativa').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 5,
    arrows: false,

  });







  //conter

  $("#anodefundacao").countMe(40, 10);

  $("#Localizacao").countMe(120, 500);

  $("#linhasdeatende").countMe(120, 280);

  $("#projectosfinalizados").countMe(40, 120);

  $("#usadospofone").countMe(40, 80);

  $("#cliectesfieis").countMe(40, 10);

