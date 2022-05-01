// #1 Use an Array to store a collection of data
let yourArray=['Tacos', 3,'echo', 10, true] // Change this line
console.log(yourArray.length);

// #2 Access an Array's contents using bracket notation
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "I wanna win the lottery";
// Only change code above this line
console.log(myArray);

//#3 Add items to an Array with push() and unshift()
function mixedNumbers(arr) {
    // Only change code below this line
    
  arr.unshift('I',2,'three');
  
  arr.push(7,'VIII',9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  //#4 Remove Items from an Array with pop()
 //and shift()
 function popShift(arr) {
    // Change this line
      let popped = arr.pop()
     let shifted = arr.shift()// Change this line
      return [shifted,popped];
    }
    
    console.log(popShift(['challenge', 'is', 'not', 'complete']));

    //#5 Remove items using Splice
    const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
    let newArr = arr.splice(1,4);
// Only change code above this line
    console.log(arr);

    //#6 Add items using Splice ()
    function htmlColorNames(arr) {
        // Only change code below this line
      let startIndex = 0;
      let amountToDelete = 2;
      
      arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
        // Only change code above this line
        return arr;
      }
      
      console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

      //#7 Copy Array Items using slice()
      function forecast(arr) {
        // Only change code below this line
      let forecast = arr.slice(2, 4); 
        return forecast;
      }
      
      // Only change code above this line
      console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

      //#8 Copy an Array with the spread operator
      function copyMachine(arr, num) {
        let newArr = [];
        while (num >= 1) {
          // Only change code below this line
      
      newArr.push([...arr]);
          
          // Only change code above this line
        num--;
        }
        return newArr;
      }
      
      console.log(copyMachine([true, false, true], 2));

      //#9 Combine Arrays with the spread operator
      function spreadOut() {
        let fragment = ['to', 'code'];
        let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
        return sentence;
      }
      
      console.log(spreadOut());

      //#10 Check for the presence of an element with indexOf()
      function quickCheck(arr, elem) {
        // Only change code below this line
      if (arr.indexOf(elem) >= 0) {
          return true;
        }
        return false;
        // Only change code above this line
      }
      
      console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

      //#11 Iterate through all an Array's Items using For loops
      function filteredArray(arr, elem) {
        let newArr = [];
        // Only change code below this line
      for(let i = 0; i < arr.length; i++ ) {
        if (arr[i].indexOf(elem) == -1) {
          newArr.push(arr[i]);
        }
      }
        // Only change code above this line
        return newArr;
      }
      
      console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
      //#12 Create complex multi-dimensional arrays
      let myNestedArray = [
        // Only change code below this line
        ["unshift", false, 1, 2, 3, "complex", "nested"],
        ["loop", "shift", 6, 7, 1000, "method"],
        ["concat", false, true, "spread", "array", ["deep"]],
        ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
        ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
        // Only change code above this line
      ];

      //#13 Add key value pairs to Javascript objects
      let foods = {
        apples: 25,
        oranges: 32,
        plums: 28
      };
      
      // Only change code below this line
      foods.bananas = 13;
      foods.grapes = 35;
      foods.strawberries = 27;
      // Only change code above this line
      
      console.log(foods);
      
      //#14 Modify an Object nested within an Object
      let userActivity = {
        id: 23894201352,
        date: 'January 1, 2017',
        data: {
          totalUsers: 51,
          online: 42
        }
      };
      
      // Only change code below this line
      userActivity.data.online = 45;
      // Only change code above this line
      
      console.log(userActivity);

      //#15 Access property names with Bracket Notation
      let foods = {
        apples: 25,
        oranges: 32,
        plums: 28,
        bananas: 13,
        grapes: 35,
        strawberries: 27
      };
      
      function checkInventory(scannedItem) {
        // Only change code below this line
      return foods[scannedItem];
        // Only change code above this line
      }
      
      console.log(checkInventory("apples"));

      //#16 Use the delete keyword to remove object properties
      let foods = {
        apples: 25,
        oranges: 32,
        plums: 28,
        bananas: 13,
        grapes: 35,
        strawberries: 27
      };
      
      // Only change code below this line
      delete foods.oranges;
      delete foods.plums;
      delete foods.strawberries;
      // Only change code above this line
      
      console.log(foods);

     //#17 Check if an object has a property
     let users = {
        Alan: {
          age: 27,
          online: true
        },
        Jeff: {
          age: 32,
          online: true
        },
        Sarah: {
          age: 48,
          online: true
        },
        Ryan: {
          age: 19,
          online: true
        }
      };
      
      function isEveryoneHere(userObj) {
        // Only change code below this line
         if (
          userObj.hasOwnProperty("Alan") &&
          userObj.hasOwnProperty("Jeff") &&
          userObj.hasOwnProperty("Sarah") &&
          userObj.hasOwnProperty("Ryan")
        ) {
          return true;
        }
        return false;
        // Only change code above this line
      }
      
      console.log(isEveryoneHere(users));

      //#18 