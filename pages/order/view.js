import React from 'react'

export default function view() {
  return (
    <div className="row">
        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h4 className="text-center" styles="margin-bottom:50px;">ORDER SUMMARY</h4>
                    <div className="form-sample">
                        <h5 className="card-description">Customer Info</h5>
                        <div className="row">
                            <div className="col-md-6 col-xs-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label"><b>Order No : </b></label>
                                    <div className="col-sm-9">
                                        <p>#54356</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-6">
                                <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><b>First Name</b></label>
                                <div className="col-sm-9">
                                    <p>Ashwani</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-6">
                                <div className="form-group row">
                                <label className="col-sm-3 col-form-label"><b>Last Name</b></label>
                                <div className="col-sm-9">
                                    <p>Kumar</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label"><b>Email</b></label>
                                    <div className="col-sm-9">
                                        <p>aksingh99903@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label"><b>Contact Number</b></label>
                                    <div className="col-sm-9">
                                        <p>9540387609</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xs-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label"><b>Address</b></label>
                                    <div className="col-sm-9">
                                        <p>RC-221, Prasant Garden Khora Colony, 201301, Ghaziabad India</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-6">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label"><b>Type</b></label>
                                    <div className="col-sm-9">
                                        <p>Online</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <h5 className="card-description">Book Info</h5>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <th>Sno.</th>
                                            <th>Book Details</th>
                                            <th>Quantity</th>
                                            <th>MRP</th>
                                            <th>Discount</th>
                                            <th>Price</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mathematics, RD Sharma, Dhanpat Rai Publication</td>
                                                <td>2</td>
                                                <td>600</td>
                                                <td>20%</td>
                                                <td>400</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Mathematics, RD Sharma, Dhanpat Rai Publication</td>
                                                <td>2</td>
                                                <td>600</td>
                                                <td>20%</td>
                                                <td>400</td>
                                            </tr>
                                            <tr>
                                                <td><b>Grand Total</b></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>800/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
