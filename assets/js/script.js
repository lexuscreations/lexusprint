const swiper = new Swiper(".projectsContainer", {
    effect: "coverflow",
    grabCursor: true,
    autoplay: {
     delay: 2500,
     disableOnInteraction: false,
    },
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})
// 
// 
// 
// 
// 
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
})
sr.reveal(`.home__data, .home__social-link, .home__info,
           .projectsContainer,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})
sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})
sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})
// 
// 
// 
// 
// 
if (localStorage.getItem('selected-theme')) {
  if(localStorage.getItem('selected-theme') === `light`){
    $(`#theme-button`).removeClass(`ri-sun-line`)
    $(`body`).removeClass(`dark-theme`)
    $(`.navThemeToggle`).css({'color': `#42737d`})
  }else{
    $(`#theme-button`).addClass(`ri-sun-line`)
    $(`body`).addClass(`dark-theme`)
    $(`.navThemeToggle`).css({'color': `#fff`})
  }
}
$(`.navThemeToggle`).click(() => {
    if(localStorage.getItem('selected-theme') === `light`){
        $(`.navThemeToggle`).css({'color': `#fff`})
    }else{
        $(`.navThemeToggle`).css({'color': `#42737d`})
    }
    // if(Math.round(Math.random() * 1) == 1){
    //     $(`body`).toggleClass(`dark-theme-darkpink`)
    // }else{
    //     $(`body`).toggleClass(`dark-theme`)
    // }
    $(`body`).toggleClass(`dark-theme`)
    $(`#theme-button`).toggleClass(`ri-sun-line`)
    localStorage.setItem('selected-theme', $(`body`).hasClass(`dark-theme`) ? `dark` : `light`)
    localStorage.setItem('selected-icon', $(`#theme-button`).hasClass(`ri-sun-line`) ? `ri-sun-line` : `ri-moon-line`)
})
// 
// 
// 
// 
// 
$("a").on('click', function(e) {
    let hash = this.hash
    if (hash !== "") {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, () => {
            window.location.hash = hash
        })
    }
})
// 
// 
// 
// 
// 
function scrollFns() {
    if(!$(`#navbarSupportedContent`).hasClass(`navMobActive`)){
        if(this.scrollY >= 99) {
            $(`.topMainNav`).addClass(`scroll-header`)
        }else {
            $(`.topMainNav`).removeClass(`scroll-header`)
        }
    }
    if(this.scrollY >= 199) {
        $(`.scrollToTop`).css({'bottom': `1.5rem`, 'opacity': `0.8`})
    }else {
        $(`.scrollToTop`).css({'bottom': `-20%`, 'opacity': `0.1`})
    }
    document.querySelectorAll('section[id]').forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if(window.pageYOffset > sectionTop && window.pageYOffset <= sectionTop + sectionHeight){
            document.querySelector('.navMenuLi a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navMenuLi a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollFns)
// 
// 
// 
// 
// 
$(`.navbar-toggler`).click(()=>{
    $(`#navbarSupportedContent`).toggleClass(`navMobActive`)
    if($(`#navbarSupportedContent`).hasClass(`navMobActive`)){
        $(`.topMainNav`).addClass(`scroll-header`)
    }else{
        $(`.topMainNav`).removeClass(`scroll-header`)
    }
})
// 
// 
// 
// 
// 
let ztxt = new Ztextify(".forZtext", {
    depth: "30px",
    layers: 8,
    fade: true,
    direction: "both",
    event: "pointer",
    eventRotation: "10deg"
})
// 
// 
// 
// 
// 
let typed5 = new Typed('.forTyped', {
    strings: ['Print <i>Mug</i>', 'Print <strong>T-shirt</strong>', 'Print <u>Merchandise</u>', 'Print <i>Mug</i>'],
    typeSpeed: 50,
    backSpeed: 30,
    cursorChar: '|',
    shuffle: false,
    smartBackspace: true,
    loop: true
  });
// 
// 
// 
// 
// 

setInterval(()=>{
    if($(`.homeSecHeroBgImg`).attr("src") == "./assets/img/heroBg1.jpg"){
        $(`.homeSecHeroBgImg`).attr("src","./assets/img/heroBg.jpg");
    }else{
        $(`.homeSecHeroBgImg`).attr("src","./assets/img/heroBg1.jpg");
    }
}, 30000);
