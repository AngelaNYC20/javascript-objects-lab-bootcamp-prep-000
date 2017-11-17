var recipes = {
  time: 60,
  milk: 1, //milk is the key and the 1 is the value
  sugar: 2,
};

function updateObjectWithKeyAndValue(object, key, value){
  var newV = Object.assign ({}, object);
  newV[key]=value;
  return newV;
}
