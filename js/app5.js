
let element = document.querySelector('#app5');

element.addEventListener('click', function(){
    let button = document.querySelector('#button');

    let newElement = document.createElement('div');
    newElement.setAttribute('id', 'addition');
    newElement.innerHTML = "<p>my name is minato</p>";
    element.insertBefore(newElement, button);
});
