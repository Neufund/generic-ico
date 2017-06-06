import React from 'react';

const buttonStyle = {
  margin: '10px 10px 10px 0',
  width: '100%',
  backgroundColor: '#09628D',
  color: 'white',
  textalign: 'center',
  height: '40px',
  lineheight: '40px',
};

const Button = React.createClass({
  render() {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}
      >test</button>
    );
  },
});

module.exports = Button;
