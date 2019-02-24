import React, { Component } from 'react'
import Link from 'next/link';

export default class books extends Component {
  render() {
    return (
        <div className="row">
        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-header">
                    <h4 className="text-center" style={{marginBottom:'50px'}}>ALL BOOKS</h4>
                    <div className="pull-right">
                    <Link href="/book/add">
                    <a className="btn btn-primary btn-fw">ADD BOOK</a>
                    </Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-sample">
                        
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>SKU</th>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Author/Publisher</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                           <td>#4343</td>
                                           <td><img src="" alt="image"></img></td>
                                           <td>
                                               <Link href="/book-edit">
                                               <a>
                                               Mathematics
                                               </a>
                                                </Link>
                                            </td>
                                           <td>RD Sharma, Dhanpat Rai Publication</td>
                                           <td>345</td>
                                           <td>CLass 10</td>
                                           <td>21-10-2018</td>
                                           <td>
                                               <Link href="/book"><a>EDIT</a></Link>&nbsp;&nbsp;
                                               <Link href=""><a>DELETE</a></Link>
                                           </td>
                                            
                                        </tr>
                                        
                                        
                                       
                                       
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
}
