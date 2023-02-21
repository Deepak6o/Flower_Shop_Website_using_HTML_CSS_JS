let searchForm = document.querySelector('.search-form');

document.querySelector('#search-box').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}
window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    else {
        document.querySelector('.header').classList.remove('active');
    }
}
window.onload = () => {
   
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    else {
        document.querySelector('.header').classList.remove('active');
    }
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20, 
    effect: "fade", 
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },

});
var swiper = new Swiper(".products-slider", {
    spaceBetween: 20,  
    loop:true,
   
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    breakpoints: {
        10: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },

});

