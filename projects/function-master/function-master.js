console.clear();

function objectValues(obj){
    var keys = Object.keys(obj)
    var vals = [];
    for (var i= 0 ; i < keys.length; i++){
        vals.push(obj[keys[i]]);
    }
    return vals;
}

function keysToString(obj){
    var keys = Object.keys(obj);
    var data = ""; 
    for (var i= 0 ; i < keys.length; i++){
        data = keys.join(" ");
    }
    return data;
    
    // could also just use " return Object.keys(obj).join(' '); "
}

function valuesToString(obj){
    var valueArray = objectValues(obj);
    var value = [];
    for (var i= 0 ; i < valueArray.length; i++){
        if(typeof(valueArray[i])=== "string"){
            value.push(valueArray[i]);
        }
    }
    return value.join(" ");
}

function arrayOrObject(arg){
    if (Array.isArray(arg)=== true){
        return "array";
        
    }else if(typeof(arg)=== "object"){
        return "object";
    }
}

function capitalizeWord (string){
    return string.substring(0,1).toUpperCase() + string.substring(1);
    
}

function capitalizeAllWords(string){
    var x = string.split(" ");
    var y= [];
  
    for (var i=0; i < x.length ; i++){
        y.push(capitalizeWord(x[i]));
    }
   
    return y.join(" ");
}

function welcomeMessage(object){
    var x = capitalizeWord(object.name);
    return "Welcome " + x  + "!";
}

function profileInfo(object){
    var x = capitalizeWord(object.name);
    var y = capitalizeWord(object.species);
    return x + " is a " + y;
    
}

//Should take an object, if this object has a noises array return them as a string separated by a space
//if there are no noises return 'there are no noises' (1, 0, 1)"

function maybeNoises(object){
    
    if ( object.noises === undefined || object.noises.length === 0 ){
        return "there are no noises";
    }else {
        return object.noises.join(" ");
    }
    
}

//Should take a string of words and a word and 
//return true if <word> is in <string of words>, otherwise return false. 

function hasWord (string,word){
    var x = string.search(word);
   if (x === -1){
       return false;
   }else {
       return true;
   }
}

function hasWord2(words, word){
    return words.split(" ").indexOf(word) > -1 ;
}


//Should take a name and an object and 
//add the name to the object's friends array then return the object

function addFriend (name, object){
    object.friends.push(name);
    return object; 
}

//Should take a name and an object and return true if 
//<name> is a friend of <object> and false otherwise"

function isFriend (name, object){
    var x = object.friends;
    
    if (x === undefined){
        return false;
    }
    
    for (var i = 0 ; i < x.length ; i++ ){
      console.log(x[i],name);
       if (x[i] === name ){
        return true;
       }
    }  
    return false;  
}

//Should take a name and a list of people,
//and return a list of all the names 
//that <name> is not friends with 

function nonFriends(name,arrayList){
    var notFriends = [];
    for (var i = 0; i < arrayList.length; i++){
      if(!isFriend(name, arrayList[i]) && arrayList[i].name !== name){
          notFriends.push(arrayList[i].name);
      }
      
    }
    
    return notFriends;
    
}


function nonFriends2(name, people){
    var non_friends = [];
    for(var i = 0; i < people.length; i++){
        if(people[i].friends.indexOf(name) === -1 && people[i].name !== name){
            non_friends.push(people[i].name);
        }
    }
    return non_friends;
}

//updateObject() : Should take an object, a key and a value. 
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it.",


function updateObject (object, key, value){
   object[key] = value;
   
    // if (object.key !== key ){
    //         object[key] = value; 
    //         // why can this use identifiers vs real values?
            
    // }
    return object 
}

function removeProperties (object, array) {
    //Should take an object and an array of strings. 
    //Should returnany properties on <object>
    //that are listed in <array>"

    var objectKeys = Object.keys(object);
    var objResult = {};
    
    for(var i = 0 ; i < objectKeys.length ; i++){
     if (array.indexOf(objectKeys[i]) === -1){
        objResult[objectKeys[i]] = object[objectKeys[i]]; 
     }
    
    // for(var i = 0 ; i < objectKeys.length ; i++){
    //   if (bad_keys.indexOf(objectKeys[i]) >= 0){
    //      delete object[objectKeys[i]];
     
    //   }
   // return object
    }
    return objResult  //- works if you dont need too use delete opperator. 
}


//dedup() : Should take an array and 
//return an array with all the duplicates removed"

function dedup (array){
    var arrayResult = [];
    
    for(var i = 0 ; i < array.length ; i++){
        if ((arrayResult.indexOf(array[i])) <= 0 ){
            arrayResult.push(array[i]);
        } 
    }
    return arrayResult
    }

