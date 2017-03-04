

function memoize(id, elem) {
  // var elem = document.getElementById(id);
  let cachedElement = {};

  if(elem === cachedElement) {
      console.log(memoize.cachedElement, 'cached element');
      return elem.cachedElement.innerHTML;
    }
  else {
    console.log('not in cache');
    // var newElem = document.getElementById(id);
    cachedElement = elem;
    console.log('cached element', cachedElement)
    return cachedElement.innerHTML;
  }
}

memoize('para', 'p');
memoize('para', 'p');


//
// calling an element (by id or selector)
//   if element does not exist in cache
//     store the element in memory
//     serve the element
//   else if element does exist in cache
//     serve the cache value (which should be the element)
