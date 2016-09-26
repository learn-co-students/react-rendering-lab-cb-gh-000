const Translator = require('./components/Translator');
const Circles = require('./components/Circles');
const Pusheen = require('./components/Pusheen');
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <div>
    <div className="container"><Translator /></div>
    <div className="container"><Circles /></div>
    <div className="container"><Pusheen /></div>
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
