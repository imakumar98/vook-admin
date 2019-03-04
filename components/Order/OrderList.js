import React from 'react';
import OrderListRow from './OrderListRow';

function OrderList() {
  return (
    <div className="row">
        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-header">
                    <button>ADD BOOK</button>
                </div>
                <div className="card-body">
                    <h4 className="text-center" style={{marginBottom:'50px'}}>ACTIVE ORDERS</h4>
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
                                        <OrderList/>
                                        <OrderList/>
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
