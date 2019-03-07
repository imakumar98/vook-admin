import React from 'react';
import OrderListRow from './OrderListRow';
import Link from 'next/link';

function OrderList() {
  return (
    <div className="row">
        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-header">
                <div className="row">
                    <div className="col-md-11">
                        <input type="text" style={{marginLeft:'-20px'}} placeholder="Search by Order, Customer Name, Order Date" className="form-control"/>
                    </div>
                    <div className="col-md-1" >
                        <Link prefetch href="/book/add">
                            <a className="btn btn-primary btn-fw" style={{minWidth:'115px'}}>ADD ORDER</a>
                        </Link>
                        
                    </div>
                </div>
                </div>
                <div className="card-body">
                    <div className="form-sample">
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#ORDER ID</th>
                                            <th>Customer Name</th>
                                            <th>Progress</th>
                                            <th>Next Action</th>
                                            <th>Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <OrderListRow/>
                                        <OrderListRow/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderList;
