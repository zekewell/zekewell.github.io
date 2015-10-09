// This is the proper way to start a javascript library
(function() {
  
  // This makes the arguments variable behave the way we want it to and a few
  // other things. For more info: 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
  'use strict';

  // This allows us to use our "_" anywhere. In a web browser, properties of window
  // are available everywhere without having to type "window."
  /* global _ */
  window._ = {};

  /**
   * START OF OUR LIBRARY!
   * Implement each function below it's instructions
   */

  /** _.identity()
   * Arguments:
   *   1) Anything
   * Objectives:
   *   1) Returns <anything> unchanged
   * Examples:
   *   _.identity(5) === 5
   *   _.identity({a: "b"}) === {a: "b"}
   */
   
  _.identity = function(anything){
    return anything;
  }




  /** _.first()
   * Arguments:
   *   1) An array
   *   2) A number
   * Objectives:
   *   1) If <array> is not an array, return []
   *   2) If <number> is not given or not a number, return just the first element in <array>.
   *   3) Otherwise, return the first <number> items of <array>
   * Gotchas:
   *   1) What if <number> is negative?
   *   2) What if <number> is greater than <array>.length?
   * Examples:
   *   _.first(["a","b","c"], 2) -> ["a", "b"]
   *   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
   */
   _.first = function(array, number){
      var resultArr = [];
      
      if (!Array.isArray(array)|| number < 0 ){
        return [];
        
        } else if (isNaN(number)){
        return array[0];
      }
      
      if (number > array.length){
        return array;
        
      } else { 
        
        for (var i = 0 ; i < number ; i++ ){
          resultArr.push(array[i]);
          }
      }
      return resultArr;
        
  };
  
  //check specific variables first and then look for more general
  
  _.first2 = function( arr,len ){
     if (len === 0 || len < 0){
       return [];
     }
     if (!len || len === undefined){
      return arr[0];
     }
    return arr.slice(0, len);
  };
         

  /** _.last()
   * Arguments:
   *   1) An array
   *   2) A number
   * Objectives:
   *   1) If <array> is not an array, return []
   *   2) If <number> is not given or not a number, return just the last element in <array>.
   *   3) Otherwise, return the last <number> items of <array>
   * Gotchas:
   *   1) What if <nubmer> is negative?
   *   2) What if <number> is greater than <array>.length?
    * Examples:
   *   _.last(["a","b","c"], 2) -> ["b","c"]
   *   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
   */
  
  _.last2 = function( array, number ) { var resultArr = [];
      
      if (!Array.isArray(array) || number < 0 ){
        return resultArr;
        
        } else if (isNaN(number)){
        return array[array.length-1];
      }
      
      if (number > array.length){
          return array;
      } else { 
        
        for (var i = 0 ; i < number ; i++ ){
          resultArr.push(array[i +1]);
          
          }
      }
      return resultArr;
        
  };
  
  _.last = function (arr, len){
    if (len <= 0 ){
      return [];
    }else if(!len){
      return arr[arr.length -1];
    }
    if (len > arr.length){
      len = arr.length;
    }
    return arr.slice(-len); // check the documentation to understand how the function slice effects 
  };


  /** _.each()
   * Arguments:
   *   1) A collection
   *   2) A function - indicates higher order funciton and the likely need to 
   * use said funciton. 
   * getting in two pieces of general data and use them to return  specific data 
   * Objectives:
   *   1) if <collection> is an array, call <function> once for each element
   *      with the arguments: 
   *         the element, it's index, <collection>
   *   2) if <collection> is an object, call <function> once for each property
   *      with the arguments:
   *         the property's value, it's key, <collection>
   * Gotchas:
   *   1) what if <function> is not a function?
   *   2) what if <collection> is not a collection?
    * Examples:
   *   _.each(["a","b","c"], function(e,i,a){ console.log(e)}); 
   *      -> should log "a" "b" "c" to the console
   */

  _.each = function (coll, func){
    if(Array.isArray(coll)){
      for (var i = 0 ; i < coll.length; i++){
        func(coll[i], i, coll);
      }
    } else if(typeof coll === "object"){
      for ( var key in coll ){
        func(coll[key],key,coll);
      }
    }
    };
    
  _.each2 = function(coll, func){
    if(Array.isArray(coll)){
      for (var i = 0 ; i < coll.length; i++){
        func(coll[i], i, coll);
      }
    } else if(typeof coll === "object"){
      var keys = Object.keys(coll);
      for (var i= 0; i< keys.length; i++){
        func(coll[keys[i]], keys[i], coll);
      }
    }
  };
      


  /** _.indexOf()
   * Arguments:
   *   1) An array
   *   2) A value
   * Objectives:
   *   1) Return the index of <array> that is the first occurrance of <value>
   *   2) Return -1 if <value> is not in <array>
   *   3) Do not use [].indexOf()!
   * Gotchas:
   *   1) What if <array> has multiple occurances of val?
   *   2) What if <val> isn't in <array>?
    * Examples:
   *   _.indexOf(["a","b","c"], "c") -> 2
   *   _.indexOf(["a","b","c"], "d") -> -1
   */
  _.indexOf = function(arr, value){
    for (var i = 0 ; i < arr.length ; i++){
      if (arr[i] === value){
        return i;
      }
    }
    return -1;    
  };
  
  /** _.filter()
   * Arguments:
   *   1) An array
   *   2) A function
   * Objectives:
   *   1) call <function> for each element in <array> passing the arguments:
   *      the element, it's index, <array>
   *   2) return a new array of elements for which calling <function> returned true
   * Gotchas:
   *   1) What if <function> returned something other than true or false?
   *   2) What if <array> is not an array?
   * Examples:
   *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
   */

_.filter = function(arr, func){
  var arrTrue = [];
  
  for (var i = 0; i < arr.length; i++){
    
     if(func(arr[i],i, arr) === true ){
       arrTrue.push(arr[i]);
     }
  }
   return arrTrue;
};



  /** _reject()
   * Arguments:
   *   1) An array
   *   2) A function
   * Objectives:
   *   1) call <function> for each element in <array> passing the arguments:
   *      the element, it's index, <array>
   *   2) return a new array of elements for which calling <function> returned false
   * Gotchas:
   *   1) What if <function> returned something other than true or false?
   *   2) What if <array> is not an array?
   * Examples:
   *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
   * Extra Credit:
   *   Use _.filter in your implementation (this is actually pretty easy)
   */
_.reject2 = function(arr,func){
  return _.filter(arr, function(value){
    return !func(value);
  });
};

_.reject = function(arr, func){
  var negater = function(value){
    return !func(value);
  };
  
  return _.filter(arr, negater);
};
  /** _.uniq()
   * Arguments:
   *   1) An array
   * Objectives:
   *   1) return a new array of all elements from <array> with duplicates removed
   * Examples:
   *   _.uniq([1,2,2,4,5,5,2]) -> [1,2,4,5]
   */
   
  _.uniq = function(arr) {
  var arrResult = [];
  
  for(var i = 0 ; i < arr.length ; i++){
       if(_.indexOf(arrResult, arr[i]) === -1){
          
          arrResult.push(arr[i]);        
        } 
    }  
    return arrResult;
} ;   




  /** _.map()
   * Arguments:
   *   1) An array
   *   2) a function
   * Objectives:
   *   1) call <function> for each element in <array> passing the arguments:
   *      the element
   *   2) save the return value of each <function> call in a new array
   *   3) return the new array
   * Gotchas:
   *   1) What if <function> is not a function?
   *   2) What if <array> is not an array?
   * Examples:
   *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
   */
   
_.map = function(arr, func){
  var arrResult = [];
  for (var i = 0; i < arr.length; i++){
    arrResult.push(func(arr[i]));
  }
  console.log(arrResult);
  return arrResult ;
};


  /** _.pluck()
   * Arguments:
   *   1) An array of objects
   *   2) A property
   * Objectives:
   *   1) Return an array containing the value of <property> for every element in <array>
   * Gotchas:
   *   1) What if <property> is not given?
   *   2) What if <array> is not an array?
   *   3) What if one of the elements doesn't have <property>?
   * Examples:
   *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
   * Bonus:
   *   Use _.map in your implementation
   */

_.pluck2 = function(arr, prop){
  var arrResult = [];
  
  for (var i = 0 ; i < arr.length ; i++){
   arrResult.push(arr[i][prop]);
   
  }
 return arrResult;
};

_.pluck = function(arr, prop){
  return _.map(arr, function(element){
    return element[prop];
  });
};

  /** _.reduce()
   * Arguments:
   *   1) An collection
   *   2) A function
   *   3) A seed
   * Objectives:
   *   1) Call <function> for every element in <collection> passing the arguments:
   *       if <collection> is an array:
   *         previous result, current element, current element's index
   *       if <collection> is an object
   *         previous result, current index, current value
   *   2) Use the return value of <function> as the "previous result"
   *      for the next iteration
   *   3) On the very first iteration, use <seed> as the "previous result"
   *   4) After the last iteration, return the return value of the final <function> call
   * Gotchas:
   *   1) What if no <seed> is given?
   * Examples:
   *   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
  */
_.reduce = function (col, func, seed){
    
    var i = 0
    
    if (seed === undefined){
        
        seed = col[0];
        
        i= 1;
          
      } 
    if (Array.isArray(col) ){
         
        for (var i ; i < col.length ; i++){
          
          func(seed,col[i], i);
          
          seed = func(seed,col[i], i);
          
          } 
    } 
      return seed;
};
//New Objective: If no <seed> was given, use the first element/value of <collection> as <seed>


  /** _.contains()
   * Arguments:
   *   1) An array
   *   2) A value
   * Objectives:
   *   1) Return true if <array> contains <value>
   *   2) Return false otherwise
   * Gotchas:
   *   1) did you use === ?
   *   2) What if <array> is not an array?
   *   3) What if no <value> is given?
   * Examples:
   *   _.contains([1,"two", 3.14], "two") -> true
   */

_.contains = function (arr, val){
    
    if (_.indexOf(arr,val) > 0) {
      return true;
    }else {
      return false;
    }
};  


  /** _.every()
   * Arguments:
   *   1) A collection
   *   2) A function
   * Objectives:
   *   1) Call <function> for every element of <collection> with the paramaters:
   *      if <collection> is an array:
   *          current element, it's index, <collection>
   *      if <collection> is an object:
   *          current value, current key, <collection>
   *   2) If the return value of calling <function> for every element is true, return true
   *   3) If even one of them returns false, return false
   * Gotchas:
   *   1) what if <function> doesn't return a boolean
   * Examples:
   *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
   *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
   */
   
_.every = function (col, func) { 
  func = func ? func : _.identity; // if func does exist use func; if not use _.identity 
//   
  if (Array.isArray(col)) {
    for (var i = 0; i < col.length ; i++){
      if (!func(col[i], i, col)){
        return false;
      } 
    } 
    return true;
  }
}; 
   
  /** _.some()
   * Arguments:
   *   1) A collection
   *   2) A function
   * Objectives:
   *   1) Call <function> for every element of <collection> with the paramaters:
   *       if <collection> is an array:
   *        current element, it's index, <collection>
   *       if <collection> is an object:
   *        current value, current key, <collection>
   *   2) If the return value of calling <function> is true for at least one element, return true
   *   3) If it is false for all elements, return false
   * Gotchas:
   *   1) what if <function> doesn't return a boolean
   * Examples:
   *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
   *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
   */

_.some = function (col, func){
  
  func = func ? func : _.identity;
  
  if (Array.isArray(col)) {
    for (var i = 0; i < col.length ; i++){
      if (func(col[i], i, col)){
        return true;
      } 
    } 
    return false;
  }
  
};

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"one"}
*/


_.extend = function(){
  
 for( var j = 0 ; j  < arguments.length ; j++){
  
  var stopspin= Object.keys(arguments[j]);
  
    for (var i = 0 ; i < stopspin.length ; i++){
      
      var key = stopspin[i];
      arguments[0][key] = arguments[j][key];
      
    }
 }  
  return arguments[0];
};


// arguments is an array like special variable 
//that we have available in every function. 


_.extend2 = function(){
  
  for(var i = 1 ; i < arguments.length ; i++){
    for(var ponies in arguments[i]){
    arguments[0][ponies] = arguments[i][ponies];
    }
  }  
  return arguments[0]; 
  
};

// This is the proper way to end a javascript library
}());
