import React from 'react'
import {Query} from 'react-apollo';
import BookCategory from './BookCategory';
import BookType from './BookType';
import BookPublisher from './BookPublisher';
import {GET_CATEGORIES_QUERY, GET_TYPES_QUERY, GET_PUBLISHERS_QUERY} from './../../lib/QueryMutations';




function BookCategoryList() {
  return (
    <div>
    <div className="row">
        <div class="col-lg-6 grid-margin stretch-card">
            <div class="card">
            <div class="card-body">
                <h4 class="card-title">Book Categories</h4>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Category Name</th>
                               
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <Query query={GET_CATEGORIES_QUERY}>
                            {({data,error,loading})=>{
                                if(loading) return <tr><td><p>Loading...</p></td></tr>
                                if(error) return <Error error="error"/>
                                
                                return (
                                    <tbody>
                                        {data.getCategories.map((category,index)=><BookCategory category={category} key={index} sno={index+1}/>)}
                                    </tbody>
                                );
                            }}
                        </Query>
                    </table>
                </div>
            </div>
            </div>
        </div>
        <div class="col-lg-6 grid-margin stretch-card">
            <div class="card">
            <div class="card-body">
                <h4 class="card-title">Book Types</h4>
                <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Type Name</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <Query query={GET_TYPES_QUERY}>
                        {({data,error,loading})=>{
                            if(loading) return <tr><td><p>Loading...</p></td></tr>
                            if(error) return <Error error="error"/>
                            
                            return (
                                <tbody>
                                    {data.getTypes.map((type,index)=><BookType type={type} key={index} sno={index+1}/>)}
                                </tbody>
                            );
                        }}
                    </Query>
                </table>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
            <div class="card-body">
                <h4 class="card-title">Publisher List</h4>
                <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Publisher Name</th>
                        <th>Discount</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <Query query={GET_PUBLISHERS_QUERY}>
                        {({data,error,loading})=>{
                            if(loading) return <tr><td><p>Loading...</p></td></tr>
                            if(error) return <Error error="error"/>
                            
                            return (
                                <tbody>
                                    {data.getPublishers.map((publisher,index)=><BookPublisher publisher={publisher} key={index} sno={index+1}/>)}
                                </tbody>
                            );
                        }}
                    </Query>
                </table>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BookCategoryList;
export {GET_CATEGORIES_QUERY,GET_TYPES_QUERY};
