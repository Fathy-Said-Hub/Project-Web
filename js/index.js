let element = document.getElementsByClassName("onReload")[0];
let body = document.getElementsByClassName("stop-scrolling")[0];
let h1 = document.getElementsByTagName("h1");
let tit = document.querySelector('.tit');

setTimeout(function () {
    element.classList.add("remove");
    h1[0].style.cssText = "opacity: 0;";

    setTimeout(function () {
        body.classList.remove('stop-scrolling');
        h1[0].style.cssText = 'display: none;';
    }, 3000)

    setTimeout(function () {
        tit.classList.add('fadeInUp');
    }, 1250)
}, 2000)


let arro = document.querySelector(".homee");
let leftDiv1 = document.getElementsByClassName("animate-slide-in-left")[0];
let leftDiv2 = document.getElementsByClassName("animate-slide-in-left")[1];
let rightDiv = document.getElementsByClassName("animate-slide-in-right")[0];

window.addEventListener('scroll', function () {
    if (this.scrollY >= 500) {
        arro.style.opacity = 1;
    } else {
        arro.style.opacity = 0;
    }

    if (this.scrollY >= 1100) {
        leftDiv1.style.cssText = "animation: animateslideinleft 3s ease-out forwards;";
        rightDiv.style.cssText = "animation: animateslideinright 3s ease-out forwards; animation-delay: 0.2s;";
        leftDiv2.style.cssText = "animation: animateslideinleft 3s ease-out forwards; animation-delay: 0.5s;";
    } else {
        leftDiv1.style.cssText = "animation: none;";
        leftDiv2.style.cssText = "animation: none;";
        rightDiv.style.cssText = "animation: none;";
    }
})