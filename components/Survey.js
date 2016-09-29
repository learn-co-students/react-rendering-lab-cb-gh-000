const React = require('react');
const Rating = require('./Rating');

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

class Survey extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rating: 0
    };

    this.increaseRating = this.increaseRating.bind(this);
    this.maintainRating = this.maintainRating.bind(this);
    this.decreaseRating = this.decreaseRating.bind(this);
  }

  increaseRating() {
    this.setState({ rating: this.state.rating + 1 });
  }

  decreaseRating() {
    this.setState({ rating: this.state.rating - 1 });
  }

  maintainRating() {
    this.setState({ rating: this.state.rating });
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
        <Rating rating={this.state.rating} />
        <button onClick={this.increaseRating}>Loved it!</button>
        <button onClick={this.maintainRating}>Indifferent!</button>
        <button onClick={this.decreaseRating}>Hated it!</button>
      </div>
    )
  }
}

module.exports = Survey;
