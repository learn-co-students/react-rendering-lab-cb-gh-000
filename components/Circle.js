import React from 'react';

export default class Circle extends React.Component {

  shouldComponentUpdate(nextProps) {
     return Boolean(nextProps.color !== this.props.color);
     return Boolean(nextProps.color !== this.props.color);
   }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}
