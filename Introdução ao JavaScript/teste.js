function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i <array.length; i++) {
       if(array [i] % 2 === 0) {
         evenNums.push(array[i]);
       } 
    }
    console.log(evenNums);
}

let array = [1,2,3,4,5,7,8];

returnEvenValues(array);
