import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testActions';

const actions = { incrementCounter, decrementCounter };

class testComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h2>Test Area</h2>
        <h3>this is state: {this.props.data}</h3>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

export default connect(
  mapStateToProps,
  actions
)(testComponent);
