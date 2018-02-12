import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(nextProps) {
    return Boolean(nextProps.color !== this.props.color);
  }

  render() {
    const { color } = this.props;
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
