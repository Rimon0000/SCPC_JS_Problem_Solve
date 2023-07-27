function twoSum(array, target) {
    let i = 0;
    let j = array.length - 1;
  
    while (i < j) {
      if (array[i] + array[j] === target) {
        return [i, j];
      } else if (array[i] + array[j] < target) {
        i++;
      } else {
        j--;
      }
    }
  
    return [];
  }
  const array = [1, 3, 6, 8, 11, 15];
  const target = 9;
  const result = twoSum(array, target);
  console.log(result);

 