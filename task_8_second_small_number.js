function findSecondSmallestNumber(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      return undefined;
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
    return secondSmallest !== Infinity ? secondSmallest : undefined; 
  }
  
  const numbers = [9, 5, 3, 1, 4, 7];
  console.log(findSecondSmallestNumber(numbers)); 