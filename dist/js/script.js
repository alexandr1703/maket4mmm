let count = $('.development__items').length;
// alert(count);

if (count < 4){
  if(count==2){
    $('.development__slider').slick({
      infinite: false,
      dots: false,
      slidesToShow: 2,
      draggable: false,
      arrows:false,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows:false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              dots: true
            }
          },
        ]
    });
  }
  else if(count==1){
    $('.development__slider').slick({
      infinite: false,
      dots: false,
      slidesToShow: 1,
      draggable: false,
      arrows:false,
      slidesToScroll: 1,
    });
  }
  else{
  $('.development__slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 3,
    draggable: false,
    arrows:false,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true
          }
        },
      ]
  });
  }
}
else{
    $('.development__slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true
          }
        },
      ]
  });
}
  

$('.citata__slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed:10000,
    indinite:true,
    fade:true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.mentor__slider').slick({
  infinite: true,
  fade:true,
  dots: true,
  autoplay: true,
  autoplaySpeed:10000,
  indinite:true,
  fade:true,
  slidesToShow: 1,
  slidesToScroll: 1
});
let burger = document.getElementById('burger');


function fu() {
    document.getElementById('nav').classList.toggle('active');

}

$("#send").click(function() {
  let name= $(".name").val();
  let surname= $(".surname").val();
  let choise= $(".choise").val();
  let telephone= $(".tel").val();
  let email= $(".email").val();
  let nameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
  let regMail = /^\S+@\S+\.\S+$/;
  let regPhone = /^[0-9\-\+]{9,15}$/;
  let errorArray = [0, 0, 0, 0, 0];

  if (name==null || name=="" || name.search(nameReg)){
    $(".name").attr("placeholder", "Поле обязательно до заполнения");
    $(".name").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    errorArray[0] = 1;
  } else {
    $(".name").removeClass("wrong_inp");
    errorArray[0] = 0;
  }

  if (surname==null || surname=="" || surname.search(nameReg)){
    $(".surname").attr("placeholder", "Поле обязательно до заполнения");
    $(".surname").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    errorArray[1] = 1;
  } else {
    $(".surname").removeClass("wrong_inp");
    errorArray[1] = 0;
  }

  if (choise==null || choise=="" || choise.search(nameReg)){
    $(".choise").attr("placeholder", "Поле обязательно до заполнения");
    $(".choise").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    errorArray[2] = 1;
  } else {
    $(".choise").removeClass("wrong_inp");
    errorArray[2] = 0;
  }

   if(telephone==null || telephone=="" || telephone.search(regPhone)){

    $(".tel").attr("placeholder", "Поле обязательно до заполнения");
    $(".tel").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    errorArray[3] = 1;
  } else {
    $(".tel").removeClass("wrong_inp");
    errorArray[3] = 0;
  }
   if (email==null || email=="" || email.search(regMail)) {
    $(".email").attr("placeholder", "Поле обязательно до заполнения");
    $(".email").addClass("wrong_inp");
    $(".closed").removeClass("sended");
    errorArray[4] = 1;
  } else {
    $(".email").removeClass("wrong_inp");
    errorArray[4] = 0;
  }

  
  if (errorArray[0] == 0 && errorArray[1] == 0 && errorArray[2] == 0 && errorArray[3] == 0 && errorArray[4] == 0) {
    $(".email").removeClass("wrong_inp");
    $(".name").removeClass("wrong_inp");
    $(".surname").removeClass("wrong_inp");
    $(".tel").removeClass("wrong_inp");
    $(".choise").removeClass("wrong_inp");
    $(".closed").addClass("sended");
    // $('input').val(''); 
    $(".form").submit()
    return true;
  };
});
