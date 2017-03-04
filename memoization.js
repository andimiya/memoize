function Memoize(elem, id) {
  var elem = document.getElementById('para');
  if(eleme === cachedElement) {
      console.log(memoize.cachedElement, 'cached element');
      return eleme.cachedElement.innerHTML;
    }
  else {
    var newElem = document.getElementById('para');
    cachedElement = newElem;
    return newElem.innerHTML;
  }
}

//
// function memoize(element, idName) {
//   var element = document.createElement('div');
//
//   console.log(element.id)
//   let cachedElement = null;
//   if(element === cachedElement) {
//     console.log(memoize.cachedElement, 'cached element');
//     return element.cachedElement.innerHTML;
//   }
//   else {
//     var newThing = document.getElementById('div');
//     memoize.cachedElement = newThing;
//     return newThing.innerHTML;
//   }
// }
// memoize('something', 'div id');
