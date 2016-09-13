const Translator = require('./components/Translator');
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <div className="container"><Translator /></div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
