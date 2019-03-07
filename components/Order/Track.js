import React, { Component } from 'react';
import Link from 'next/link';


class Track extends Component {
  render() {
    return (
        <div className="row">
        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-body">
                    <div className="form-sample">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="order-id pull-left">
                                <p><b>ORDER NO : </b>&nbsp;#54356</p>
                                </div>
                                <div className="order-view pull-right">
                                    <Link href="/order/view">
                                        <a><small>VIEW MORE</small></a>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div id="accordion">
                                    <div className="card">
                                        <button className="btn completed"><i className="mdi mdi-file-document-box"></i> &nbsp;NEW ORDER<span className="pull-right"><i className="fa fa-check-circle"></i></span></button>
                                    </div>
                                    <div className="card">
                                        <button className="collapsed btn completed" data-toggle="collapse" data-target="#order-picked"><i className="fa fa-truck"></i>&nbsp; ORDER PICK<span className="pull-right"><i className="fa fa-check-circle"></i></span></button>
                                        <div id="order-picked" className="collapse" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="book-list">
                                                    <p><b>BOOKS TO BUY : </b></p>
                                                    <p>* Mathematics className 10, RD Sharma, Dhanpat Rai Publication <b>[2]</b></p>
                                                    <p>* Mathematics className 11, RD Sharma, Dhanpat Rai Publication <b>[4]</b></p>
                                                </div>
                                                <hr/>
                                                <div className="cost-price-form">
                                                    <form id="cost-price-form">
                                                        <div className="input-group">
                                                            <input type="number" className="form-control" placeholder="Enter Cost Price"/>
                                                            <div className="input-group-append">
                                                                <button className="btn btn-success" style={{marginBottom: '0px', background : '#00ce68', padding:'12px'}} type="submit">SAVE</button>  
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <button className="collapsed btn completed" data-toggle="collapse" data-target="#call-customer"><i className="fa fa-phone"></i>&nbsp;CALL CUSTOMER<span className="pull-right"><i className="fa fa-check-circle"></i></span></button>
                                        <div id="call-customer" className="collapse" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="customer-number">
                                                    <p><b>Customer Name : </b>Amit Kumar</p>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" value="9540387609" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-secondary" style={{marginBottom: '0px', padding:'12px'}} type="submit">COPY</button>  
                                                        </div>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="delivery-time-form">
                                                    <form id="delivery-time-form">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" placeholder="Enter Delivery Time"/>
                                                            <div className="input-group-append">
                                                                <button className="btn btn-success" style={{marginBottom: '0px', background : '#00ce68', padding:'12px'}} type="submit">SAVE</button>  
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <button className="collapsed btn active" data-toggle="collapse" data-target="#order-ready"><i className="fa fa-print"></i>&nbsp;ORDER READY<span className="pull-right"><i className="fa fa-check-circle"></i></span></button>
                                        <div id="order-ready" className="collapse" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="print-invoice">
                                                    <p>1.&nbsp;&nbsp;<a href="#">Download Invoice</a></p>
                                                    <p>2. Print Invoice</p>
                                                    <p>3. Vook Stamp On Books</p>
                                                    <button className="btn btn-success" style={{marginBottom: '0px', background : '#00ce68', padding:'12px', width : '60px'}} type="button">SAVE</button>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <button className="collapsed btn" disabled data-toggle="collapse" data-target="#order-dispatched"><i className="fa fa-paper-plane"></i>&nbsp;ORDER DISPATCH<span className="pull-right"><i className="fa fa-check-circle"></i></span></button>
                                        <div id="order-dispatched" className="collapse" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="order-dispatched">
                                                    <form id="order-dispatched">
                                                        <div className="form-group">
                                                            <select className="form-control" name="vook_boy_name">
                                                                <option value="">-Select Vook Boy-</option>
                                                                <option value="Anil">Anil</option>
                                                                <option value="Ashwani">Ashwani</option>
                                                                <option value="Arun">Arun</option>
                                                            </select>
                                                        </div>
                                                        <button className="btn btn-success" style={{marginBottom: '0px', background : '#00ce68', padding:'12px', width : '60px'}} type="submit">SAVE</button> 
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <button className="collapsed btn " disabled data-toggle="collapse" data-target="#order-delivered"><i className="fa fa-check-circle"></i>&nbsp;ORDER DELIVER<span className="pull-right"><i className="fa fa-check-circle"></i></span></button>
                                        <div id="order-delivered" className="collapse" data-parent="#accordion">
                                            <div className="card-body text-center">
                                                <button className="btn btn-success" style={{marginBottom: '0px', background : '#00ce68', padding:'12px', width : '85px'}} type="button">SUCCESS</button>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <br/><br/>
                        <div className="row">
                            <div className="col-md-12 col-xs-12"> 
                                <button className="btn btn-block btn-danger">CANCEL ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}


export default Track;
