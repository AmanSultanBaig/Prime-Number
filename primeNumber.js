    // get input from user
    var getNumber = prompt('Enter Number (Check Prime Number)');

    // try to divide givin number from 2 
    let primeNumber = getNumber % 2;
    // check if number got divided

    if (primeNumber == 0) {
        alert('not a Prime Number');
    } else {
        alert('Prime Number')
    }
