const React = require('react');

class Pusheen extends React.Component {

  // TODO: create a componentDidUpdate() here
  componentDidUpdate() {
    this.resizePusheen();
  }

  resizePusheen() {
    let pusheen = document.getElementById("pusheen");
    pusheen.height = this.state.size;
    pusheen.width = this.state.size;
  }

  constructor(props) {
    super(props);
    this.state = {
      size: 100
    };
    this.resizePusheen = this.resizePusheen.bind(this);
  }

  makeBigger() {
    this.setState({
      size: this.state.size + 10
    });
  }

  makeSmaller() {
    this.setState({
      size: this.state.size - 10
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.makeBigger()}>Bigger!</button>
        <button onClick={() => this.makeSmaller()}>Smaller!</button>
      </div>
    )
  }
}

module.exports = Pusheen;