import React, { Component } from 'react';
import Link from 'next/link';

 class OrderStatus extends Component {
  render() {
    return (
        <div className="row">
        <div className="col-lg-12 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Orders</h4>
                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th> #ORDER ID</th>
                                                    <th>Customer Name</th>
                                                    <th>Progress</th>
                                                    <th>Next Action</th>
                                                    <th>Address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="font-weight-medium">13232</td>
                                                    <td><Link href="/order/track"><a>Herman Beck</a></Link></td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-success" role="progressbar" style = {{width : '25%'}} aria-valuenow="25" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>CALL CUSTOMER</td>
                                                    <td>Noida</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-medium">23232</td>
                                                    <td><Link href="/order/track"><a>John Doe</a></Link></td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{width: '75%' }}  aria-valuenow="75" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>ORDER DISPATCH </td>
                                                    <td>Khora </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td className="font-weight-medium">34233</td>
                                                    <td><Link href="/order/track"><a>John Richards</a></Link></td>
                                                    <td>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{width : '90%'}} aria-valuenow="90" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>ORDER DELIVER</td>
                                                    <td>Noida</td>
                                                   
                                                </tr>
                                                
                                               
                                               
                                            </tbody>
                                        </table>
                                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default OrderStatus;
