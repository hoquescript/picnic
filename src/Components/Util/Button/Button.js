// responsive done
import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      accentPosition: 0,
      showAccent: false
    };
  }

  setAccentPosition(e) {
    const pos = e.nativeEvent.offsetX;
    this.setState({ accentPosition: pos });
  }

  handleMouseEnter(e) {
    this.setState({
      showAccent: true,
      accentPosition: e.nativeEvent.offsetX
    });
  }

  render() {
    const { accentPosition, showAccent } = this.state;

    const accentStyle = {
      left: accentPosition - 150,
      opacity: showAccent ? 100 : 0
    };

    return (
      <button
        className="button"
        style={{
          ...this.props.style,
          textAlign: "center",
          display: "block",
          boxShadow: "none"
        }}
        onMouseMove={e => this.setAccentPosition(e)}
        onMouseEnter={e => this.handleMouseEnter(e)}
        onMouseLeave={() => this.setState({ showAccent: false })}
        onClick = {this.props.onClick}
      >
        <div
          className="button-content"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          {this.props.children}
        </div>
        <div className="accent" style={accentStyle} />
      </button>
    );
  }
}
export default Button;
