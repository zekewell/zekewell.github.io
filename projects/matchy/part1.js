var animal = {};

animal.species = "bears";
animal["name"] = "Poo Bear";
animal.noises = [];

console.log(animal);

var noises = [];

noises[0] = "grrrrr";

noises.push("rawrrr");
noises.unshift("arghhhh");

noises[noises.length] = "woooooosh";

console.log(noises.length);
console.log([noises.length -1]);
console.log(noises);

animal.noises = noises;
animal.noises.push("baaaahhhh");

console.log(animal);

// What are the different ways you can access properties on objects? 
//using DOT systax and name of property or value, bracket syntax with string of name of the property of value
//  What are the different ways of accessing elements on arrays?
//using DOT systax and push w/ property or value in (), bracket syntax with [location] assigned a
// name of the property of value as a string.

var animals = [];

animals.push(animal);

console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);

var frog = { 
    species: 'frog', 
    name: 'Kermit', 
    noises: ['croakk', 'buddd', 'wiseeee', 'errr'] 
    
};
var horse = { species: 'horse',
name: 'Hank',
noises: ['neiggghh', 'woofwoof', 'slurpp', 'ginny']
};

animals.push(frog, horse); 

console.log(animals);
console.log(animals.length);

var friends = []; 
// I chose the array data structure because it will be similar to the type of list that noises is 
// above, and does not need to be have properies assigned to values.

// Returns a random number between 0 (inclusive) and 1 (exclusive)

var addFriends = function(animals){
    
    var i = Math.round((animals.length - 1) * Math.random());
    var newFriend = animals[i].name;
    return newFriend
    

};

friends.push(addFriends(animals));

// could also write like : friends.push(addFriends(animals).name) ; 
// this is an example of precedence and functions priority over binding. 

frog.friends = friends;

console.log(frog);

/* 
Homework W2D1: 
Write a function that takes the name of an animal and returns that animals corresponding object. 
If an animal with this name doesn't exist, return null. This is called search!!!
*/

var search = function(animalName){
  
  var searchResult = null;
  
  for (var j = 0 ; j< animals.length ; j++){
    if (animalName === animals[j].name){
    searchResult = animals[j];
    }
  }   
 return searchResult;
}

// // Write a function called edit that:
// Takes 2 parameters, a name of an animal and an object
// If an animal with that name exists, replace it's entire object with the new object
// Otherwise do nothing

function edit(animalName,object){
  for (var j = 0 ; j< animals.length ; j++){
    if (animalName === animals[j].name){
        animals[j] = object;
      // this is another way of doing it below. 
      // animals[j].name = object.name; 
      // animals[j].species = object.species;
      // animals[j].friends = object.friends;
    }
  };
  
}
//Write a function called remove that:
//Takes 1 parameter, a name of an animal
//If an animal with that name exists, remove it
// can use array.splice or build a new array  and replace original. 

function remove(animalName){
  
  for (var j = 0 ; j< animals.length ; j++){
    if (animalName === animals[j].name){
     animals.splice(j,1);
    }
  }
};

/* Write a function called create that:
Takes 1 parameter, an object
Checks that the object has a name property with a length > 0
Checks that the object has a species property with a length > 0
Has a unique name, meaning no other animals have that name
Adds this new object to the animals array, only if all the other conditions pass.
Make sure it works
This is called data validation and it's extremely important in web development! */

function create(object){
  
  var createTest = search(object.name)
  if (object.name.length > 0 && object.species.length > 0){
     if (createTest === null){
      animals.push(object);
    };
  }
}

/* alternative fn 

unction create(object){
  
  if (!search(object.name) && object.name.length > 0 && object.species.length > 0){
      animals.push(object);
    };
  }
  
*/


