

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            callback(collection[key], key, collection);
        }
    }
    return collection;

}

function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key], key, collection));
      }
    }
    return result;
  }

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
    if (acc === undefined) {
        acc = values.shift();
    }
    for (let i = 0; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else {
        for (let key in collection) {
            if (predicate(collection[key], key, collection)) {
                return collection[key];
            }
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]);
            }
        }
    } else {
        for (let key in collection) {
            if (predicate(collection[key], key, collection)) {
                result.push(collection[key]);
            }
        }
    }
    return result;

}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }

}

function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
 }
  
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
   }
}
  
function myKeys(obj) {
    let keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(obj) {
    let values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
}