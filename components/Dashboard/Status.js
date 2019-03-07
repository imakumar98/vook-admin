import React, { Component } from 'react';
import StatusBlock from './../common/StatusBlock';

class Status extends Component {
  render() {
    return (
        <div className="row">
            <StatusBlock title="Total Profit" value="Rs. 43434" iconClassName="mdi mdi-cube text-danger icon-lg"/>
            <StatusBlock title="Orders" value="3455" iconClassName="mdi mdi-receipt text-warning icon-lg"/>
            <StatusBlock title="Sales" value="5693" iconClassName="mdi mdi-poll-box text-success icon-lg"/>
            <StatusBlock title="Customers" value="3233" iconClassName="mdi mdi-account-location text-info icon-lg"/>
        </div>
    )
  }
}


export default Status;
