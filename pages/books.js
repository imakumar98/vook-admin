import React, { Component } from 'react'
import Link from 'next/link';
import {Query} from 'react-apollo';
import {GET_ALL_BOOKS_QUERY} from './../lib/QueryMutations';
import Book from './../components/Books/BookRow';
import Head from 'next/head'


class books extends Component {
  render() {
    return (
        <Query query={GET_ALL_BOOKS_QUERY}>
            {({data,error,loading})=>{
                if(error) return <p>Error</p>
                if(loading) return <p>Loading...</p>
                
                return (
                    <div className="row">
                    <Head>
                        <title>All Books | Vook</title>
                    </Head>
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-10">
                                        <input type="text" style={{marginLeft:'-20px'}} placeholder="Search by Title, Author, Category" className="form-control"/>
                                    </div>
                                    <div className="col-md-2" >
                                        <Link prefetch href="/book/add">
                                            <a className="btn btn-primary btn-fw" style={{minWidth:'115px'}}>ADD BOOK</a>
                                        </Link>{'  '}
                                        <Link prefetch href="/book/add-set">
                                            <a className="btn btn-primary btn-fw" style={{minWidth:'115px'}}>ADD SET</a>
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
                                                        <th>SKU</th>
                                                        <th>Image</th>
                                                        <th>Title</th>
                                                        <th>Author/Publisher</th>
                                                        {/* <th>Status</th> */}
                                                        <th>MRP</th>
                                                        <th>Category</th>
                                                        
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
