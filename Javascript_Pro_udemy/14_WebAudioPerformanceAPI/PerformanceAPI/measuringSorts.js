function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const largeArray = Array.from({ length: 10000 }, () => {
  return Math.floor(Math.random() * 1000);
});

const arrayForBubbleSort = [...largeArray];
const arrayForNativeSort = [...largeArray];

performance.mark("nativeSortStart");
arrayForNativeSort.sort((a, b) => a - b);
performance.mark("nativeSortEnd");

performance.measure("Native Sort Time", "nativeSortStart", "nativeSortEnd");

performance.mark("bubbleSortStart");
bubbleSort(arrayForBubbleSort);
performance.mark("bubbleSortEnd");
performance.measure("Bubble Sort Time", "bubbleSortStart", "bubbleSortEnd");

const nativeDuration =
  performance.getEntriesByName("Native Sort Time")[0].duration;
const bubbleDuration =
  performance.getEntriesByName("Bubble Sort Time")[0].duration;

console.log(`Native Sort Took ${nativeDuration}ms`);
console.log(`Bubble Sort Took ${bubbleDuration}ms`);

// performance //

// performance is an object it conains a mothod called .mark
// this method places a .mark on the performances object 
//  you can then use another method .measure which takes two .marks as an argument
// it then measures the differences in time between the two.
// you can see the implementation above. which compares the times between
// native sort and bubble sort. 
// this allows you to measure efficency this could be good when debugging code or 
// checking which code is slowing an application down and may need to be refactored.

// performance.getEntryByType("")//
//  this method collects data just from a spercific type of resources
