let banners = document.querySelectorAll('.banner-area a');
let counters = document.querySelectorAll('.banner-counter-item');
let currentBanner = 0;
let currentInfo = 0
let bannerInterval;
let infos = document.querySelectorAll('.containerTesteItem')

//controla os contadores
counters.forEach((item, key)=>{
    item.addEventListener('click', ()=>{
        currentBanner = key;
        showBanner(key);
    });

    item.addEventListener('click', ()=>{
        currentInfo = key
        showInfo(key);
    })
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

function showInfo(n){
    for(let info of infos){
        info.classList.remove('active')
    }
    for(let counter of counters){
        counter.classList.remove('active');
    }
    infos[n].classList.add('active');
    counters[n].classList.add('active');
}