let banners = document.querySelectorAll('.banner-area a');
let counters = document.querySelectorAll('.banner-counter-item');
let currentBanner = 0;
let bannerInterval;

//controla os contadores
counters.forEach((item, key)=>{
    item.addEventListener('click', ()=>{
        currentBanner = key;
        showBanner(key);
    });
});

//função para exibir o banner
function showBanner(n){
    for(let banner of banners){
        banner.classList.remove('active');
    }
    for(let counter of counters){
        counter.classList.remove('active');
    }
    banners[n].classList.add('active');
    counters[n].classList.add('active');
}



