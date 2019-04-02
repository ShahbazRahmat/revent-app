import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testActions';

class testComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h2>Test Area</h2>
        <h3>this is state: {data}</h3>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
      </div>
    );
  }
}

const mapDispatchToProps = { incrementCounter, decrementCounter };
const mapStateToProps = state => ({
  data: state.test.data
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(testComponent);
