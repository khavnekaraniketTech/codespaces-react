// write a function that search element in the array and return index

let srElement = (array1, target) => {
    for (let i = 0; i < array1.length - 1; i++) {
        if (array1[i] == target) {
            return i;
        }

    }
    return -1 ;

}
let array1 = [10, 20, 58556, 786, 844, 47, 84, 8, 5, 5865, 277, 12];
let resulet = srElement(array1, 844)
console.log(resulet)