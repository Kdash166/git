const allImages = Array.from(
  { length: 1000 },
  (_, i) => `https://placeimg.com/640/480/any?image=${i}`
);

function* getBatchOfImages(images, batchSize = 10) {
  let currIndex = 0;
  while (currIndex < images.length) {
    yield images.slice(currIndex, currIndex + batchSize);
    currIndex += batchSize;
  }
}

const imageGen = getBatchOfImages(allImages);

// floating point inprecision //

// this makes it difficult to do comparisons and operations
// on floating point (Decimal numbers)
// you can use helper functions and maths floor etc
// to over come this

// very big numbers //

// javascript has a extreamely large number
// called MAX _Integer
// However the actual size of numbers you can work with
//  / do operations on is significantly smaller

// BigInt //
// there are two ways to of noting bigInt
// BigInt(123456789796876554433121)
// 1234256478676987887654n
// bigInt has been added to javascript to allow for  adding

// larger numbers that the safe max interger this is
// a different type of integer.
// some maths functions dont work on big ints

// NaN //

// not all NaNs are equal!
// even if you divide 1/1 === 1/1
//  it will return to 1
//  so you need to use isNaN()
// to if something is not a number but this doesnt work on
// values that can be coorsed into NaN like isNaN([])
// this is where Number.isNaN() comes in this will return true
//  only if the value is NaN

// pre increment and post increment //

//  ++1 and 1++ both of these will increment a value but differently.
// when we use ++1 this will increment the initial number

//  y ++x with preincrement increments before the expression
// this is generally just a quirk but it has very limited usecase
// it might cut out a few lines of code.

//  semi-colons //

// javascript inserts Semi Colons for you but you should insert them
//  if you dont it may insert semi colons inappropriately
//  this can effect the function of your code line breaks matter
// because of the automatic semicolon insertion. You should always use them
// if you can.

// generator function uses//

// if you are creating a gallery so only the first 5 load or ten load
// if you load all the resources at once it would slow your website down
// significantly.

// Array.from() //
// functionality: Array.from() takes a value and turns it into an array
// a stirng will be turned into an array of characters
// a set will be turned into an array it can take a string a set or an array
// as a parameter.

// use cases:
//Array.from("hello")
// Array.from([1,2,3])
// const set = New Set([1,2,3,4])
//Array.from(set)
// so where is this useful:  say you have buttons on the dom
// and you use query selector to get them and you try to perform a
// an array method on them. It wont work! Why? because it returns a node
// list not an array. so you can use Array.from() to turn the node list
// into an array and you can then use .map . filter to have the desired effect.
// its use is if you need an array method you can turn it into an array.
// you can also pass in a mapping function.
Array.from("xyzt", (x) => x.toLocaleUpperCase());
// you can use this to incrememnt numbers
const nums = [1, 2, 3, 4, 5];
console.log(Array.from(nums, (x) => x + 1));
//  you can also use this to create an arrat of a set length
console.log(Array.from({ length: 10 }));
// of you can populate an array with a value
console.log(Array.from({ length: 10 }, (el) => true));
console.log(Array.from({ length: 10 }, (el) => "lol"));
console.log(Array.from({ length: 100 }, (el, idx) => idx+1));
// this is great if you need to create a board of numbers like 
// snakes and ladders or stats leveling per level
