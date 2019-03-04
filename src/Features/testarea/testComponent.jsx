import React, { Component } from 'react';
import { connect } from 'react-redux';

class testComponent extends Component {
  render() {
    return (
      <div>
        <h2>Test Area</h2>
        <h3>{this.props.data}</h3>
      </div>
    );
  }
}

const mapState = state => ({
  data: state.test.data
});

export default connect(mapState)(testComponent);
