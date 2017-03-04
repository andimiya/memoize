//holds a cached element
let cache = {};

function memoize(id, elem) {
  if(elem === cache) {
      console.log(elem, 'cached element');
      document.getElementById(id).innerHTML = elem;
    }
  else {
    console.log('not in cache');
    cache = elem;
    console.log('cached element', cachedElement)
    document.getElementById(id).innerHTML = 'not in cache';
  }
}

memoize('para', 'p');
memoize('para', 'p');
memoize('para', 'p');
memoize('para', 'p');


//
// calling an element (by id or selector)
//   if element does not exist in cache
//     store the element in memory
//     serve the element
//   else if element does exist in cache
//     serve the cache value (which should be the element)
