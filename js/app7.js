
// let count = document.querySelector('#count');
let button = document.querySelector('#button');
let form = document.querySelector('form');
let text = document.querySelector('#text');
let submit = document.querySelector('#submit');

let maxLetter = text.getAttribute('maxlength');

let element = document.createElement('div');
element.setAttribute('id', 'restLetter');
element.innerHTML = "<p>残り「 " + maxLetter + " 」文字入力可能です</p>";


let insertLocation = text.parentElement;
// count.insertBefore(element, null);
insertLocation.insertBefore(element, text);


let restTime = 10;
let timeMessage = document.createElement('div');

insertLocation.insertBefore(timeMessage, submit);


text.addEventListener('keyup', function () {
    let restLetter = text.value.length;
    element.innerHTML = "<p>残り「 " + (maxLetter - restLetter) + " 」文字入力可能です</p>";
});

button.addEventListener('click', function () {
     form.style.display = 'block';

     let timeID = setInterval(function(){
         timeMessage.innerHTML = "<p>制限時間："+ restTime +"秒</p>";
         if (restTime < 0) {
             alert("制限時間終了");
             clearInterval(timeID);
         }
         restTime--;
    }, 1000);
});
