const utils = {
  reverse: function reverse (source) {
      if (Array.isArray (source)) {
        let newArray = [];
      for (let i = 0; i < source.length; i++) {
        newArray[i] = source[(source. length - 1) - i]
      } 
      return newArray;

      } else if (typeof(source) === 'string') {
        let newString = '';
      for (let i = source.length - 1; i >= 0; i--) {
        newString += source[i];
      }  
      return newString;
    }
  },  

  verifyNumber: (source) => { 
      let numbers = [];
      for (let num of source) {
          if (num in source) {
              numbers.push(num);
          };
      };
      return numbers;
  },

  getMin: (source) => { 
      let minNumber = source[0];
      for (let num of source) {
          if (num < minNumber) {
              minNumber = num;
          };    
      };
      return minNumber;
  },

  getAverage: (source) => {
      let sum = 0;
      for (let i of source) {
          sum += i;
      };
      let result = sum / source.length;
      return result;
  },

  getMaxString: (source) => { 
      for (let word of source) {
          let str = 0;
          let longStr; 
          for (let i = 0; i < source.length; i++) {
              if (source[i].length > str) {
                  str = source[i].length;
                  longStr = source[i];
              };
          };
          return longStr;
      };
  },
};

// 1)
console.log(utils.reverse([1, 3, 5, 7]));
console.log(utils.reverse('hello'));

// 2)
console.log(utils.verifyNumber([1, 3, 'ree', 5, 'he', 4]));

// 3)
console.log(utils.getMin([1, 2, 3, 0, 19, 100]));
console.log(utils.getMin([9, 10, 0, -100, 0, 1]));

// // 4)
console.log(utils.getAverage([4, 9, 3, 5, 1, 8]));

// // 5)
console.log(utils.getMaxString(['qew', 'jckv', 'jchvkjbkkjnnn', 'fhjll']));






