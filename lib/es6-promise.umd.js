import Promise from './es6-promise/promise';
import polyfill from './es6-promise/polyfill';

var ES6Promise = {
  'Promise': Promise,
  'polyfill': polyfill
};

/* export as Browserify's module */
if (typeof module !== 'undefined' && module['exports']) {
  module['exports'] = ES6Promise;
}
