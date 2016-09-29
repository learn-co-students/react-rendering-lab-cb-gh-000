const Survey = require('./components/Survey');
const Circles = require('./components/Circles');
const Pikachu = require('./components/Pikachu');
const Animation = require('./components/Animation');
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <div>
    <div className="container">
      <div className="title">componentWillReceiveProps()</div>
      <Survey />
    </div>
    <div className="container">
      <div className="title">shouldComponentUpdate()</div>
      <Circles />
    </div>
    <div className="container">
      <div className="title">componentWillUpdate()</div>
      <Animation />
    </div>
    <div className="container">
      <div className="title">componentDidUpdate()</div>
      <Pikachu />
    </div>
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
