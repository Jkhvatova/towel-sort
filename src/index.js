
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    }
   const result = matrix.map((array, index) => {
       if (index % 2 !== 0) {
           return array.reverse();
       } else {
           return array;
       }
   });

   console.log(result);

  //console.log('matrix: ' + matrix);
  //console.log('result: ' + result);


  return result.flat();
}
