const isEvenodd = (num) => {
    let rem = num % 2;
    if (rem === 0) {
        console.log("number is even")
    } else {
        console.log("Number is odd")
    }
}

isEvenodd(203);