import React, { Component } from 'react';
import Status from './../components/Dashboard/Status';
import OrderStatus from './../components/Dashboard/OrderStatus';


class Home extends Component {
  render() {
    return (
      <div>
        <Status />
        <OrderStatus />
      </div>
    )
  }
}

export default Home
