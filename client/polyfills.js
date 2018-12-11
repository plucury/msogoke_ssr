/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/fn/string/virtual/includes'
import repeat from 'core-js/library/fn/string/virtual/repeat'
import assign from 'core-js/library/fn/object/assign'
import from from 'core-js/library/fn/array/from'
// import from from 'core-js-pure/library/fn/array/from'

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

require('whatwg-fetch');
// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)
console.log('Load your polyfills compolete')

String.prototype.includes = includes
String.prototype.repeat = repeat
Object.assign = assign
