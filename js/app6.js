

let button = document.querySelector('button');
let form = document.querySelector('form');

let flag = 0;

button.addEventListener('click', function(){

    if ( flag % 2 === 0 ){
        form.style.display = "block";
        flag++;
    }else {
        form.style.display = "none";
        flag++;
    }
});
