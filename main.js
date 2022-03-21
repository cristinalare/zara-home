//mobile burger menu
//==================

function toggleMenu() {
    let openIcon = document.getElementById("menu-icon");
    let closeIcon = document.getElementById("menu-close");
    let x = document.getElementById("nav-links");
    if (openIcon.style.display === "none") {
        x.style.left = "-100%";
        closeIcon.style.display = "none";
        openIcon.style.display = "block";
    } else {
        x.style.left = "0";
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
    }   
}        
    
//slideshow
//==========

let images = [
    './images/hero-1.jpg',
    './images/hero-2-new-york.jpg',
    './images/hero-3-paris.jpg'
];

let texts = [
    'los<br>angeles',
    'new york',
    'paris'
];

let ids = [
        'los-angeles-p',
        'new-york-p',
        'paris-p'
];

let imageEle = [];
let currImage = 0;
let holder = document.getElementById("currentImage");
let pholder = document.getElementById("text-container");
let textEle =[];

function imagesPreload() {
    for (let i = 0; i < images.length; i++) {
        let img = new Image();
        img.src = images[i];
        img.className = "translateOrigin";
        holder.appendChild(img);
        imageEle.push(img);

        var p = document.createElement('p');
        p.innerHTML = texts[i];
        p.className = "translateOrigin";
        p.id = ids[i];
        pholder.appendChild(p);
        textEle.push(p);
        console.log(p);
    }
}

imagesPreload();

function slideShow(startAt) {
    let holder = document.getElementById("currentImage");
    imageEle[currImage].className = "translateIn";
            
    let pholder = document.getElementById("image-text");
    textEle[currImage].className = "translateIn";

    nextPicture();
}

function nextPicture() {
    setTimeout(function () {
        let img = imageEle[currImage];
        img.addEventListener("transitionend", transitionEnd, false);
        img.className = "translateLeft";

        let text = textEle[currImage];
        text.addEventListener("transitionend", transitionEnd, false);
        text.className = "translateLeft";
                

        if (currImage == 2) {
            currImage = 0;
        } else {
            currImage++;
        }
        imageEle[currImage].className = "translateIn";

        textEle[currImage].className = "translateIn";
                
        /* Reset the image to original position */
        function transitionEnd() {
            img.className = "translateOrigin";
            img.removeEventListener("transitionend", transitionEnd, false);
            nextPicture();

            text.className = "translateOrigin";
            text.removeEventListener("transitionend", transitionEnd, false);
        }
    }, 3000);
};

slideShow(currImage);