

let name = prompt("enter your name");

// let element = document.getElementById("app4");
// element.innerHTML = "<h1>Hello " + name + "</h1>";

// let element = document.querySelector("#app4");
// element.style.backgroundColor = "green";

let rewriting = document.querySelector('#app4');
rewriting.innerHTML = "<p> hello toda </p>";

let element = document.createElement('div');
element.setAttribute('id', 'addition');
element.innerHTML = "my name is " + name;
rewriting.insertBefore(element, null);

let parent = element.parentElement;
parent.removeChild(element);
