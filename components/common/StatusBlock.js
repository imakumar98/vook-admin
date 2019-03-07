import React, { Component } from 'react';

export default class StatusBlock extends Component {
  render() {
    return (
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
                <div className="card-body">
                    <div className="clearfix">
                        <div className="float-left">
                            <i className={this.props.iconClassName}></i>
                        </div>
                        <div className="float-right">
                            <p className="mb-0 text-right">{this.props.title}</p>
                            <div className="fluid-container">
                                <h3 className="font-weight-medium text-right mb-0">{this.props.value}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
