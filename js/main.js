const menu = ["ABOUT", "PORTFOLIO", "ARTWORKS", "CONTACT"]

const swiper = new Swiper('#wrap',{
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 100,
    mousewheel: true,

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
const navi = document.querySelectorAll(".swiper-pagination span");

const $txt = $(".swiper-slide-active .subtitle");

// prev.addEventListener("click",activation);
// next.addEventListener("click",activation);
// window.addEventListener("mousewheel",activation);
swiper.on("slideChangeTransitionEnd",activation);

for(let el of navi){
    el.addEventListener("click",(e)=>{
        var isOn = e.currentTarget.classList.contains("swiper-pagination-bullet-active");
        if(isOn) return;
        swiper.on("slideChangeTransitionEnd",activation);
    });
}

// slideTxt($txt,100,1000);

function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-swiper-slide-index");

    for(let el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}