var recipes = {
  time: 60,
  milk: 1, //milk is the key and the 1 is the value
  sugar: 2,
};

function updateObjectWithKeyAndValue(object, key, value){
  var newV = Object.assign ({}, object); // creating clone of the object by creating a new variable to reference it
  newV[key]=value; // the new varaible takes a key and gives a value
  return newV;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newV = Object.assign ({}, object);
  delete newV[key];
  return newV;
}
