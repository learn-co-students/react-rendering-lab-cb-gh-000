const React = require('react');

class Circle extends React.Component {

  // TODO: create a shouldComponentUpdate() here
  shouldComponentUpdate(nextProps) {
    return Boolean(nextProps.color !== this.props.color);
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`)
    return (
      <div className={`circle ${color}`}>
      </div>
    )
  }
}

module.exports = Circle;