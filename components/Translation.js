const React = require('react');

class Translation extends React.Component {

  // TODO: create a componentWillReceiveProps here

  constructor(props) {
    super(props);
    this.state = { greeting: '' }
  }

  translate(greetingCode) {
    const mapGreeting = {
      'morning': 'Good morning!',
      'midday': 'Good afternoon!',
      'evening': 'Good evening!'
    };
    this.setState({ greeting: mapGreeting[greetingCode] });
  }

  render() {
    return (
      <div>
        <p>Code: {this.props.greetingCode}</p>
        <p>Greeting: {this.state.greeting}</p>
      </div>
    )
  }
}

module.exports = Translation;