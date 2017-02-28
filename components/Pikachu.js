const React = require('react');

class Pikachu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: 100
    };
    this.resizePikachu = this.resizePikachu.bind(this);
    this.makeBigger = this.makeBigger.bind(this);
    this.makeSmaller = this.makeSmaller.bind(this);
  }

  resizePikachu() {
    const pikachu = document.getElementById("pikachu");
    pikachu.height = this.state.size;
    pikachu.width = this.state.size;
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

  componentDidUpdate() {
    this.resizePikachu();
  }

  render() {
    return (
      <div>
        <button onClick={this.makeBigger}>Bigger!</button>
        <button onClick={this.makeSmaller}>Smaller!</button>
      </div>
    )
  }
}

module.exports = Pikachu;
