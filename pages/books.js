import React, { Component } from 'react'
import Link from 'next/link';
import {Query} from 'react-apollo';
import {GET_ALL_BOOKS_QUERY} from './../lib/QueryMutations';
import Book from './../components/Books/BookRow';


class books extends Component {
  render() {
    return (
        <Query query={GET_ALL_BOOKS_QUERY}>
            {({data,error,loading})=>{
                if(error) return <p>Error</p>
                if(loading) return <p>Loading</p>
                console.log(data);
                return (
                    <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-center" style={{marginBottom:'50px'}}>ALL BOOKS</h4>
                                <div className="pull-right">
                                <Link prefetch href="/book/add">
                                    <a className="btn btn-primary btn-fw">ADD BOOK</a>
                                </Link>{'  '}
                                <Link prefetch href="/book/add">
                                    <a className="btn btn-primary btn-fw">ADD SET</a>
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
                                                        <th>MRP</th>
                                                        <th>Category</th>
                                                        <th>Type</th>
                                                        <th>Date</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* {!data.getAllBooks && <tr><td><p>You have 0 Book In database</p></td></tr>}
                                                    {data.getAllBooks.length==0 && <p>You Have 0 Books In Database</p>} */}
                                                    {data.getAllBooks.map((book,index)=><Book book={book} key={index} />)}
                                                    {loading && <p>Loading...</p>}
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
                );
            }}
        </Query>
    
    )
  }
}


export default books;
