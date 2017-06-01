import React from 'react';

const Button = React.createClass({
  render() {
    return (
      <button
        onClick={this.props.handleClick}
      >{this.props.label}</button>
    );
  },
});

module.exports = Button;

// todo: Add Flex box integration
//       Add SASS implemenation
//       Add additional abstractions
