let arr = [10, 20, 30, 40, 50, 60,18,25,45,78,6,9,25,47,43,1];

function sortArray() {
    let arrayvalue = 0;
    arr.sort((a, b) => a - b)
    // for (let i = 0; i <= arr.length; i++){
    //     arr.sort((a, b) => a - b)

    // }
    arrayvalue = arr[arr.length - 2];
    return arr;
}
console.log(sortArray());