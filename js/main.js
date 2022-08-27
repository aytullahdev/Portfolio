const navbtn = document.getElementById('navbtn');
const navid = document.getElementById('navid');
const closenav = document.getElementById('closenav');
navbtn.addEventListener('click',()=>{
    navid.classList.toggle('slide');
})

navid.addEventListener('click',()=>{
    navid.classList.toggle('slide');
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          
        }
      }
   
  });
