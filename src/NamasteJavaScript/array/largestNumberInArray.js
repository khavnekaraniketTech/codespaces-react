let array = [10, 20, 30, 40, 50];
const largestNumber = (array) => {
    array.sort((a, b) => a - b);
    console.log(array[array.length - 1]);

}
largestNumber(array);
