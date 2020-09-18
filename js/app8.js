
let insertLocation = document.querySelector('#main');
let array = document.createElement('div');

array.setAttribute('id', 'array');

let fruits = ["orange", "apple", "banana"];

for (let i=0; i<fruits.length; i++){
    array.innerHTML = "<p>" + fruits[i] + "</p>";
    insertLocation.insertBefore(array, null);
    console.log(fruits[i])
}
