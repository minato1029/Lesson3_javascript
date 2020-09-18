
let hand_one = hands();
let hand_two = hands_random();

let result = match(hand_one, hand_two);

alert(result);

function hands() {

    let hand = prompt("enter your number 0 1 2");

    if ( 0 <= hand && hand < 1 ) {
        hand = "rock";
    } else if ( 1 <= hand && hand < 2 ) {
        hand = "scissors";
    } else {
        hand = "paper";
    }
    alert("your hand is " + hand);
    return hand;
}

function hands_random() {
    let hand = Math.random()*3;
    if ( 0 <= hand && hand < 1 ) {
        hand = "rock";
    } else if ( 1 <= hand && hand < 2 ) {
        hand = "scissors";
    } else {
        hand = "paper";
    }
    alert("computer's hand is " + hand);
    return hand;
}
function match(hand1, hand2) {

    let result = 0;

    if (hand1 === hand2) {
        result = "this game is draw";
    }else if (hand1 === "rock"){
        if (hand2 === "scissors") {
            result = "you is winner";
        }else {
            result = "you is looser";
        }
    }else if (hand1 === "scissors") {
        if (hand2 === "paper") {
            result = "you is winner";
        }else {
            result = "you is looser";
        }
    }else if (hand1 === "paper") {
        if (hand2 === "rock") {
            result = "you is winner";
        } else {
            result = "you is looser";
        }
    }
    return result;
}
