import React, { Component, PropTypes } from 'react';


export default class Home extends Component {

  static propTypes = {
    msg: PropTypes.string
  }

  static defaultProps = {
    msg: 'Home Page'
  }

  render() {
  // const styles = require('Home.scss');

    const {
      msg
    } = this.props;

    return (
      <div>
        { msg }
      </div>
    );
  }
}
