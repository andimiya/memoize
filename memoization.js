//holds a cached element
let cachedElement = {};

function memoize(id, elem) {
  if(elem === cachedElement) {
      console.log(elem, 'cached element');
      return cachedElement.innerHTML;
    }
  else {
    console.log('not in cache');
    //if element does not exist in cached, store the element in the cache
    cachedElement = elem;
    console.log('cached element', cachedElement)
    return cachedElement.innerHTML;
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
