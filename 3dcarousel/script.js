let bgImg1 = document.querySelector('.backgroundImg1');
let bgImg2 = document.querySelector('.backgroundImg2');
let bgImg3 = document.querySelector('.backgroundImg3');

let bgImgsArray = [bgImg1,bgImg2,bgImg3];

let previousMove = null;

let img1 = document.querySelector('.images .img1 .imgContainer');
let img2 = document.querySelector('.images .img2 .imgContainer');
let img3 = document.querySelector('.images .img3 .imgContainer');

let imgsArray = [img1, img2 ,img3];


let img1ZIndex = document.querySelector('.images .img1');
let img2ZIndex = document.querySelector('.images .img2');
let img3ZIndex = document.querySelector('.images .img3');

let imgsZIndexArray = [img1ZIndex,img2ZIndex,img3ZIndex];

let img1FadeInBox = document.querySelector('.img1 .imgFadeInBox');
let img2FadeInBox = document.querySelector('.img2 .imgFadeInBox');
let img3FadeInBox = document.querySelector('.img3 .imgFadeInBox');

let imgsFadeInBoxArray = [img1FadeInBox,img2FadeInBox, img3FadeInBox];

let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');

moveSliderLeft = () => {
    // in this way set the onClick to null during the 1.2 seconds of transition
    rightButton.setAttribute('onClick', null);
    leftButton.setAttribute('onClick', null);

    imgsArray[0].style.transform = "rotateY(-40deg) translateX(280px) scale(0.55)";
    imgsZIndexArray[0].style.zIndex = '100';
    imgsArray[1].style.transform = "rotateY(40deg) translateX(-280px) scale(0.55)";
    imgsZIndexArray[1].style.zIndex = '300';
    imgsFadeInBoxArray[1].classList.remove('fadeInEffectLighten');
    imgsFadeInBoxArray[1].classList.add('fadeInEffectDarken');
    imgsArray[2].style.transform = "rotateY(0deg) scale(1)";
    imgsZIndexArray[2].style.zIndex = '200';
    imgsFadeInBoxArray[2].classList.remove('fadeInEffectDarken');
    imgsFadeInBoxArray[2].classList.add('fadeInEffectLighten');

    if(previousMove == 'left'){
        bgImgsArray[1].style.left = '-200vw';
    }else if(previousMove == null) {
        bgImgsArray[1].style.left = '-150vw';
    } else if(previousMove == 'right'){
        bgImgsArray[1].style.left ='-100vw';
    }

    bgImgsArray[1].style.opacity = '1';
    bgImgsArray[1].style.zIndex = '150';

    bgImgsArray[2].style.left = '-150vw';
    bgImgsArray[2].style.opacity = '1';
    bgImgsArray[2].style.zIndex = '200';

    // after 1250ms we reassigne the function to the buttons
    setTimeout(()=>{
        bgImgsArray[0].style.left = '-100vw';
        bgImgsArray[0].style.opacity = '0';
        bgImgsArray[0].style.zIndex = '100';

        bgImgsArray[1].style.left = '-100vw';
        bgImgsArray[1].style.opacity = '0';
        bgImgsArray[1].style.zIndex = '100';

        previousMove='left';
        imgsArray.push(imgsArray.shift());
        imgsZIndexArray.push(imgsZIndexArray.shift());
        imgsFadeInBoxArray.push(imgsFadeInBoxArray.shift());
        bgImgsArray.push(bgImgsArray.shift());
        leftButton.setAttribute('onClick', "javascript: moveSliderLeft();");
        rightButton.setAttribute('onClick', "javascript: moveSliderRight();");
    }, 1250);

}
moveSliderRight = () => {
    // in this way set the onClick to null during the 1.2 seconds of transition
    rightButton.setAttribute('onClick', null);
    leftButton.setAttribute('onClick', null);

    imgsArray[0].style.transform = "rotateY(0deg) scale(1)";
    imgsZIndexArray[0].style.zIndex = '300';
    imgsFadeInBoxArray[0].classList.remove('fadeInEffectDarken');
    imgsFadeInBoxArray[0].classList.add('fadeInEffectLighten');
    imgsArray[1].style.transform = "rotateY(-40deg) translateX(280px) scale(0.55)";
    imgsZIndexArray[1].style.zIndex = '200';
    imgsFadeInBoxArray[1].classList.remove('fadeInEffectLighten');
    imgsFadeInBoxArray[1].classList.add('fadeInEffectDarken');
    imgsArray[2].style.transform = "rotateY(40deg) translateX(-280px) scale(0.55)";
    imgsZIndexArray[2].style.zIndex = '100';

    bgImgsArray[0].style.left = '-50vw';
    bgImgsArray[0].style.opacity = '1';
    bgImgsArray[0].style.zIndex = '200';

    if(previousMove == 'right'){
        bgImgsArray[1].style.left = '0vw';
    }else if(previousMove == null) {
        bgImgsArray[1].style.left = '-50vw';
    } else if(previousMove == 'left'){
        bgImgsArray[1].style.left ='-100vw';
    }

    bgImgsArray[1].style.opacity = '1';
    bgImgsArray[1].style.zIndex = '150';

    // after 1250ms we reassigne the function to the buttons
    setTimeout(()=>{
        bgImgsArray[1].style.left = '-100vw';
        bgImgsArray[1].style.opacity = '0';
        bgImgsArray[1].style.zIndex = '100';

        bgImgsArray[2].style.left = '-100vw';
        bgImgsArray[2].style.opacity = '0';
        bgImgsArray[2].style.zIndex = '100';

        previousMove='right';
        imgsArray.unshift(imgsArray.pop());
        imgsZIndexArray.unshift(imgsZIndexArray.pop());
        imgsFadeInBoxArray.unshift(imgsFadeInBoxArray.pop());
        bgImgsArray.unshift(bgImgsArray.pop());
        leftButton.setAttribute('onClick', "javascript: moveSliderLeft();");
        rightButton.setAttribute('onClick', "javascript: moveSliderRight();");
    }, 1250);

}