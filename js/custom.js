
 $(document).ready(function(){
   $('.close-icon').click(function(){
      $('.top-header').hide();
       })
  
        });
  //  search icon      
 $(document).ready(function(){
   $('.search').click(function(){
      $('#search').toggle();
       })
  
        });
 $(document).ready(function(){
   $('.cart-tool').click(function(){
      $('.cart-bag').toggle();
       })
  
        });

        
// drop-down carosel
$(document).ready(function(){
  $('.dropdown-carosel').slick({
     dots: true,
     infinite:true,
     autoplay:true,
     speed: 300,
     slidesToShow:4,
     slidesToScroll: 4,
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
     
     ]
   });

  });

  // banner slide 
  $(document).ready(function(){
    $('.banner-content-slide , .banner-img-slide').slick({
      dots: true,
      infinite: true,
      autoplay:true,
      speed:3000,
      slidesToShow: 1,
      adaptiveHeight: true
    });


  })
 
  // arrival carosel 
  $(document).ready(function(){
    $('.product-slider').slick({
       dots: true,
       infinite:true,
       autoplay:true,
       speed: 300,
       slidesToShow:4,
       slidesToScroll: 4,
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
       
       ]
     });
  
    });

// tabs js start 
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// tabs js end


  

 
