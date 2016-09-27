 function tripleFive() {
    for (var i = 0; i <= 2; i++) {
      console.log("Five!");
    }
    
 }

tripleFive();

function lastLetter(string) {
    var letter = string.charAt(string.length - 1);
    console.log(letter);
}

lastLetter('Hello');

function square(num) {
    console.log(num * num);
}

square(5);


function negate(num) {
    console.log("-" + num);
}

negate(7);

function toArray(arg1, arg2, arg3) {
    var myArray = [arg1, arg2, arg3];
    console.log(myArray);
}

toArray(1, 3, 5);


function startsWithA(string) {
    var firstLetter = "A";
    if (string.toUpperCase().charAt(0) === firstLetter) {
        console.log(true);
    } else {
        console.log(false);
    }
}


startsWithA("adam");
startsWithA("Adam");
startsWithA("Charlie");


function sun(string) {
    if (string.indexOf('sun', -1) == true) {
        console.log(true);
    } else {
        console.log(false);
    }
}

sun('osundries');
sun('asunder');
sun('catapult');



function tiny(num) {
    if (num > 0 && num < 1) {
        console.log(true);
    } else {
        console.log(false);
    }
}

tiny(3);
tiny(.7);
tiny(-4);



function getSeconds(time) {
    var numbers = time.split(':');  //splits time at ":" and creates array with two strings
    var minutes = parseInt(numbers[0] * 60); //converts first string - minutes - into numbers and multiplie by 60
    var seconds = parseInt(numbers[1]);  // converts second string - seconds -  into numbers
    console.log(minutes + seconds);
}


getSeconds('01:30');
getSeconds("10:25");

getSeconds('10:45');