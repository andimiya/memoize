//holds a cached element




function memoizeQuery() {
  var cache = {};
  return function (sel) {
    if(cache.hasOwnProperty(sel)) {
      console.log('returning cache');
      return cache[sel]
    } else {
      console.log('setting the cache');
      return cache[sel] = document.querySelectorAll(sel);
    }
  }
}
//
//   if(cache.hasOwnProperty(sel)) {
//       console.log(elem, 'cached element');
//       document.getElementById(id).innerHTML = elem;
//     }
//   else {
//     console.log('not in cache');
//     cache = elem;
//     console.log('cached element', cache)
//     document.getElementById(id).innerHTML = 'not in cache';
//   }
// }
//
//
// memoizeQuery('para', 'p');
// memoizeQuery('para', 'p');
// memoizeQuery('para', 'p');
// memoizeQuery('para', 'p');
//
// module.exports = {
//   memoize: memoize
// }
//
// calling an element (by id or selector)
//   if element does not exist in cache
//     store the element in memory
//     serve the element
//   else if element does exist in cache
//     serve the cache value (which should be the element)
