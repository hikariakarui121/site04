

// var slider1= new Swiper('.slider1', {
//   spaceBetween: 30,
//   effect: 'fade',
//   centeredSlides: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

// var slider1 = new Swiper('.slider1', {
//       slidesPerView: 1,
//       spaceBetween: 30,
//       effect:'fade',
//       loop:true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
      
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: true,
//       }
//     });

// ふたつ目のスライドショー
var slider2 = new Swiper('.slider2', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop:true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },

      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
    }
    });

    $(function(){
      $('#buttons').on('click',function(){
     
          $('#nav').toggleClass('-open');
          $('.logo').toggleClass('-open');
          $('#buttons').toggleClass('-open');
      })
    });


    // ボタンヘッダー
    $(function(){
      $('.fsec').on('click',function(){
          $('.fsec-item').toggleClass('-open');
          $('.fsec-btn').toggleClass('-open');
      
      })
    });


    //ヘッダー中身の場合わけ
    $(function(){

      if(window.matchMedia('(min-width:1000px)').matches){

        $('.uni').hover(function(){
          $('.h-second').toggleClass('-active');
        })
        $('.major').hover(function(){
          $('.h-third').toggleClass('-active');
      })
        $('.career').hover(function(){
            $('.h-forth').toggleClass('-active');
        })
        $('.intro').hover(function(){
            $('.h-fifth').toggleClass('-active');
        })
        $('.help').hover(function(){
            $('.h-sixth').toggleClass('-active');
        })
        $('.feat').hover(function(){
            $('.h-seventh').toggleClass('-active');
        })
        $('.life-s').hover(function(){
            $('.h-eighth').toggleClass('-active');
        })
        
      } else{
        
        $('.accordion').on('click',function(){
            $(this).next().slideToggle();        
        })

        };
      });


      //タブ部分
      $(function(){
        $('.tab').on('click',function(){
            $('.tab').removeClass('-active');
            $(this).addClass('-active');
        
      
            $('.news__contents, .news-btn').removeClass('-active');
            const clicked =$(this).data('id');
            // alert(clicked);
            $("#" + clicked).addClass('-active');
            $("." + clicked).addClass('-active');
 
        })
      });



      