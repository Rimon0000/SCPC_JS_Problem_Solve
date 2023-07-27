function findFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null; 
    }
  
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;
  
    arr.forEach((element) => {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  
      if (frequencyMap[element] > maxFrequency) {
        maxFrequency = frequencyMap[element];
        mostFrequentElement = element;
      }
    });
    return mostFrequentElement;
  }
  
  const input = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = findFrequentElement(input);
  console.log(result);