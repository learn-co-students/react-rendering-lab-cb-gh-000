const React = require('react');
const Translation = require('./Translation');

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

class Translator extends React.Component {

  constructor(props) {
    super(props);
    this.state = { greetingCode: '', numGreetings: 0 }
    this.newGreeting = this.newGreeting.bind(this);
  }

  newGreeting() {
    const greetings = ['morning', 'midday', 'evening'];
    const randomGreeting = random(greetings);
    this.setState({
      greetingCode: randomGreeting,
      numGreetings: this.state.numGreetings + 1
    });
  }

  render() {
    return (
      <div>
        <p>Number of greetings: {this.state.numGreetings}</p>
        <button onClick={this.newGreeting}>New Greeting</button>
        <Translation greetingCode={this.state.greetingCode}/>
      </div>
    )
  }
}

module.exports = Translator;
