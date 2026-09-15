let previousMove = null;

let img1 = document.querySelector('.images .img1 .imgContainer');
let img2 = document.querySelector('.images .img2 .imgContainer');
let img3 = document.querySelector('.images .img3 .imgContainer');
let img4 = document.querySelector('.images .img4 .imgContainer');
let img5 = document.querySelector('.images .img5 .imgContainer');

let imgsArray = [img1, img2 ,img3,img4,img5];

let img1ZIndex = document.querySelector('.images .img1');
let img2ZIndex = document.querySelector('.images .img2');
let img3ZIndex = document.querySelector('.images .img3');
let img4ZIndex = document.querySelector('.images .img4');
let img5ZIndex = document.querySelector('.images .img5');

let imgsZIndexArray = [img1ZIndex,img2ZIndex,img3ZIndex,img4ZIndex,img5ZIndex];

let img1FadeInBox = document.querySelector('.img1 .imgFadeInBox');
let img2FadeInBox = document.querySelector('.img2 .imgFadeInBox');
let img3FadeInBox = document.querySelector('.img3 .imgFadeInBox');
let img4FadeInBox = document.querySelector('.img4 .imgFadeInBox');
let img5FadeInBox = document.querySelector('.img5 .imgFadeInBox');

let imgsFadeInBoxArray = [img1FadeInBox,img2FadeInBox, img3FadeInBox,img4FadeInBox,img5FadeInBox];

let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');

moveSliderLeft = () => {
    // in this way set the onClick to null during the 1.2 seconds of transition
    rightButton.setAttribute('onClick', null);
    leftButton.setAttribute('onClick', null);

    imgsArray[0].style.transform = "rotateY(20deg) translateX(40vw) scale(0.6)";
    imgsZIndexArray[0].style.zIndex = '50';
    imgsArray[1].style.transform = "rotateY(-20deg) translateX(-40vw) scale(0.6)";
    imgsZIndexArray[1].style.zIndex = '100';
    imgsArray[2].style.transform = "rotateY(-10deg) translateX(-20vw) scale(0.8)";
    imgsZIndexArray[2].style.zIndex = '200';
    imgsFadeInBoxArray[2].classList.remove('fadeInEffectLighten');
    imgsFadeInBoxArray[2].classList.add('fadeInEffectDarken');
    imgsArray[3].style.transform = "rotateY(0deg) scale(1)";
    imgsZIndexArray[3].style.zIndex = '300';
    imgsFadeInBoxArray[3].classList.remove('fadeInEffectDarken');
    imgsFadeInBoxArray[3].classList.add('fadeInEffectLighter');
    imgsArray[4].style.transform = "rotateY(10deg) translateX(20vw) scale(0.8)";
    imgsZIndexArray[4].style.zIndex = '200';

    // after 1250ms we reassigne the function to the buttons
    setTimeout(()=>{
        previousMove='left';
        imgsArray.push(imgsArray.shift());
        imgsZIndexArray.push(imgsZIndexArray.shift());
        imgsFadeInBoxArray.push(imgsFadeInBoxArray.shift());
        leftButton.setAttribute('onClick', "javascript: moveSliderLeft();");
        rightButton.setAttribute('onClick', "javascript: moveSliderRight();");
    }, 1250);

}
moveSliderRight = () => {
    // in this way set the onClick to null during the 1.2 seconds of transition
    rightButton.setAttribute('onClick', null);
    leftButton.setAttribute('onClick', null);

    imgsArray[0].style.transform = "rotateY(-10deg) translateX(-20vw) scale(0.8)";
    imgsZIndexArray[0].style.zIndex = '100';
    imgsArray[1].style.transform = "rotateY(0deg) scale(1)";
    imgsZIndexArray[1].style.zIndex = '300';
    imgsFadeInBoxArray[1].classList.remove('fadeInEffectDarken');
    imgsFadeInBoxArray[1].classList.add('fadeInEffectLighten');
    imgsArray[2].style.transform = "rotateY(10deg) translateX(20vw) scale(0.8)";
    imgsZIndexArray[2].style.zIndex = '200';
    imgsFadeInBoxArray[2].classList.remove('fadeInEffectLighten');
    imgsFadeInBoxArray[2].classList.add('fadeInEffectDarken');
    imgsArray[3].style.transform = "rotateY(20deg) translateX(40vw) scale(0.6)";
    imgsZIndexArray[3].style.zIndex = '200';
    imgsArray[4].style.transform = "rotateY(-20deg) translateX(-40vw) scale(0.6)";
    imgsZIndexArray[4].style.zIndex = '50';

    // after 1250ms we reassigne the function to the buttons
    setTimeout(()=>{
        previousMove='right';
        imgsArray.unshift(imgsArray.pop());
        imgsZIndexArray.unshift(imgsZIndexArray.pop());
        imgsFadeInBoxArray.unshift(imgsFadeInBoxArray.pop());
        leftButton.setAttribute('onClick', "javascript: moveSliderLeft();");
        rightButton.setAttribute('onClick', "javascript: moveSliderRight();");
    }, 1250);

}