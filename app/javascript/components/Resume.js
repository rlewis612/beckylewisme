import React from "react"
import PropTypes from "prop-types"

class Resume extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

export default Resume
