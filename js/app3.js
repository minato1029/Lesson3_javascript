
alert("this is prime number experience!!!");

let number = prompt("enter your number");

let result = judge(number);

alert(number + " is " + result);






function judge(number) {
    let result = "prime number";

    for (let i = 2; i <= number / 2; i++ ) {
        if ( number % i == 0 ) {
            result = "not prime number";
            console.log( i + "番目 : " + "割り切れる00000000");
        }else {
            console.log( i + "番目 : " + "素数である");
        }
    }
    return result;
}
