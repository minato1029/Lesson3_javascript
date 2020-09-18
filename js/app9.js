
// // let fortuneArray = {
// //     slipArray : ["大吉","中吉","小吉","凶"],
// //     getResult : function () {
// //         let slipArray = this.slipArray;
// //         let number = Math.random() * slipArray.length;
// //         let integer = Math.floor(number);
// //
// //         return integer;
// //     }
// // };
//
// let fortuneSlip = fortuneArray.slipArray[fortuneArray.getResult()];
//
// console.log(fortuneSlip);


let slipArray = ["大吉","中吉","小吉","凶"];

let insertLocation = document.querySelector('main');
let button = document.querySelector('main input');

let element = document.createElement('div');
element.setAttribute('id', 'fortuneSlip');

insertLocation.insertBefore(element, null);

button.addEventListener('click', function(){
    let number = Math.floor( Math.random() * slipArray.length );
    element.innerHTML = "<p>結果は「　" + slipArray[number] + "　」でした。</p>";

});
