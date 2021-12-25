const menu = ["ABOUT", "WORKS: WEB", "WORKS: OTHERS", "CONTACT", ""]

const swiper = new Swiper('#wrap',{
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 100,
    // mousewheel: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true,
        renderBullet: function(index,className){
            return `<span class="${className}">${menu[index]}</span>`
        }
    },
});


const bgs = document.querySelectorAll(".bg li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const naviBtns = document.querySelectorAll(".swiper-pagination span");

swiper.on("slideChangeTransitionEnd",activation);

for(let el of naviBtns){
    el.addEventListener("click",(e)=>{
        var isOn = e.currentTarget.classList.contains("swiper-pagination-bullet-active");
        if(isOn) return;
        swiper.on("slideChangeTransitionEnd",activation);
    });
}

function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-swiper-slide-index");

    for(let el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");


    if(i == 0){
        prev.style.filter = `brightness(1) saturate(0)`;
        next.style.filter = `brightness(5) saturate(0)`;
    } else if (i == 3) {
        prev.style.filter = `brightness(5) saturate(0)`;
        next.style.filter = `brightness(1) saturate(0)`;
    } else {
        prev.style.filter = `brightness(5) saturate(0)`;
        next.style.filter = `brightness(5) saturate(0)`;
    }
}