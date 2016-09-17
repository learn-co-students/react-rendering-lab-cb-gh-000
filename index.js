const Translator = require('./components/Translator');
const Circles = require('./components/Circles');
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <div>
    <div className="container"><Translator /></div>
    <div className="container"><Circles /></div>
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
