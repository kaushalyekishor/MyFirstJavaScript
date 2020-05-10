
const merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]){
        sorted.push(arr1[0]);
        arr1.shift();
      } else {
          sorted.push(arr2[0]);
          arr2.shift();
      }
    };
    //console.log(sorted);
    return sorted.concat(arr1, arr2);
  };

  console.log(merge([2, 5, 10, 57], [9, 12, 13]));