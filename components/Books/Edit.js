//IMPORT LIBRARIES
import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import {createApolloFetch} from 'apollo-fetch';
import {Mutation, Query} from 'react-apollo';
import Router from 'next/router';


//IMPORT COMPONENTS
import InputGroup from './../common/InputGroup';
import Tag from './../../components/Tag';
import Error from './../ErrorMessage';
import SelectOption from './../common/SelectOption';
import {GET_CATEGORIES_QUERY, GET_TYPES_QUERY, GET_PUBLISHERS_QUERY, GET_SINGLE_BOOK, UPDATE_BOOK_MUTATION} from './../../lib/QueryMutations';
import {titleToSlug, resetSelectElement} from './../../lib/utilFunctions';
import {bookUploadUrl, bookDeleteUrl, endpoint} from './../../config';
import Image from './../Image';



class Edit extends Component {
    constructor(props){
        super();
        this.state = {
            id: props.bookId,
            title: '',
            author: '',
            publisher: '',
            category: '',
            subject: '',
            type: '',
            edition: '',
            quantity: '',
            detail: '',
            description: '',
            mrp: '',
            tags: [],
            tag: '',
            images:[],
            slug: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.addTag = this.addTag.bind(this);
        this.removeTag = this.removeTag.bind(this);
        this.removeImage = this.removeImage.bind(this);
        
    }

    async componentDidMount(){
        const fetch = createApolloFetch({
            uri: endpoint,
        });

        const res = await fetch({query: GET_SINGLE_BOOK,variables:{id:this.state.id}});
        if(!res) console.log(res)
        const book = res.data.getSingleBook;
        const tags = book.tags.map((tag)=>{
            return tag.text;
        })
        const images = book.images.map((image)=>{
            return image.src;
        })

        
       
        this.setState({title:book.title,author:book.author,detail:book.detail,description:book.description,mrp:book.mrp,quantity:book.quantity,publisher:book.publisher.name, images: images, tags: tags, type: book.type.name, category: book.category.name, slug: book.slug,edition: book.edition, subject: book.subject});
        
    }

    

    onDragOver(e){
        e.preventDefault();
         document.getElementById('dropzone').className = 'dropzone dragover';
    }
    onDrop(event){
        event.preventDefault();
        document.getElementById('dropzone').className = 'dropzone';
        document.getElementById('dropzone-text').style.display = 'none';
        
        var files = event.dataTransfer.files;
        if(files.length>5){
            return alert('Invalid');
        }
        for(var i=0;i<files.length;i++){
            var file = files[i];
            var extension = file.name.substr(file.name.lastIndexOf('.') + 1);
            
            var allowedExtension = ['jpg','jpeg','png','JPG']
            if(allowedExtension.indexOf(extension) === -1) {
                console.log("Invalid file");
            }
            else{
                var data = new FormData();
                data.append('image',file,file.name);
                const config = {
                    headers: { 'content-type': 'multipart/form-data' },
                    onUploadProgress: function(progressEvent) {
                        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                        console.log(percentCompleted);
                    }
                }
        
                axios.post(bookUploadUrl, data, config)
                .then(res=>{
                    if(res.data.success){
                        
                        this.setState({images:[...this.state.images,res.data.url]});
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
            }           
        }
    }


    onDragLeave(){
        document.getElementById('dropzone').className = 'dropzone';
    }



    

    onChange(e){
        if(e.target.name=='category'){
            document.getElementById('subject').innerHTML = '';
            if(e.target.value=='class 9'){
                var html = '';
                var subjects = ['Hindi','English','Maths','Science','History','Geography','Economics','Political Science']
                subjects.map((subject)=>{
                    html = html +  "<option value='"+subject+"'>"+subject+"</option>";
                    
                });
                document.getElementById('subject').innerHTML = html;
            }else if(e.target.value=='class 10'){
                var html = '';
                var subjects = ['Hindi','English','Maths','Science','History','Geography','Economics','Political Science']
                subjects.map((subject)=>{
                    html = html +  "<option value='"+subject+"'>"+subject+"</option>";
                    
                });
                document.getElementById('subject').innerHTML = html;
            }else if(e.target.value=='class 11'){
                var html = '';
                var subjects = ['Physics','Chemistry','Maths','English','Biology','Computer','Physical Education','Economics','Accounts','Business']
                subjects.map((subject)=>{
                    html = html +  "<option value='"+subject+"'>"+subject+"</option>";
                    
                });
                document.getElementById('subject').innerHTML = html;
            }else if(e.target.value=='class 12'){
                var html = '';
                var subjects = ['Physics','Chemistry','Maths','English','Biology','Computer','Physical Education','Economics','Accounts','Business']
                subjects.map((subject)=>{
                    html = html +  "<option value='"+subject+"'>"+subject+"</option>";
                    
                });
                document.getElementById('subject').innerHTML = html;
            }
        }
        if(e.target.name=='title'){
            if(e.target.value.length>50 && e.target.value.length<=60){
                document.getElementById('title').style.border = '1px solid #00ce68 ';
            }
            else{
                document.getElementById('title').style.border = '1px solid #e65251';
            }
            var slug = titleToSlug(e.target.value); 
            this.setState({slug:slug});
        }
        if(e.target.name=='detail'){
            if(e.target.value.length>150 && e.target.value.length<=160){
                document.getElementById('detail').style.border = '1px solid #00ce68 ';
            }
            else{
                document.getElementById('detail').style.border = '1px solid #e65251';
            }
        }
        
        this.setState({[e.target.name] : e.target.value});
    }

   

    addTag(e){
        e.preventDefault();
    
        var tag = this.state.tag;
        this.setState({tags:[...this.state.tags,tag]});
        this.setState({tag:''});
        
    }



    removeTag(e){
        var tagToRemove = e.target.getAttribute('value');
        var tagsArray = [...this.state.tags];
        var index = tagsArray.indexOf(tagToRemove)
        if (index !== -1) {
            tagsArray.splice(index, 1);
            this.setState({tags: tagsArray});
        }
    }

    async removeImage(e){
        
        var imageToRemove = e.target.getAttribute('value');
        
        //DELETE IMAGE FROM SERVER
        // var image = imageToRemove.split("https://image-manager.server.vook.in/assets/vook/books/")[1]
        // const url = bookDeleteUrl+ image;
        // const res = await axios({
        //     method: 'delete',
        //     url : url
        // });
        // if(res.data.error) return alert("Something went wrong"); 

        //REMOVE FROM STATE
        var imageArray = [...this.state.images];
        var index = imageArray.indexOf(imageToRemove)
        if (index !== -1) {
            imageArray.splice(index, 1);
            this.setState({images: imageArray});
        }


    }

   render() {

    var tagsArray = this.state.tags.map((tag,index)=><Tag tag={tag} removeTag={this.removeTag} key={index} value={tag}/>)

    var imageArray = this.state.images.map((image,index)=><Image image={image} removeImage={this.removeImage} value={image} key={index}/>)

    return (

        <Mutation mutation={UPDATE_BOOK_MUTATION} variables={{
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            publisher: this.state.publisher,
            type: this.state.type,
            subject: this.state.subject,
            category: this.state.category,
            edition: parseInt(this.state.edition),
            quantity: parseInt(this.state.quantity),
            detail: this.state.detail,
            description: this.state.description,
            mrp: parseInt(this.state.mrp),
            tags: this.state.tags,
            images: this.state.images,
            slug: this.state.slug
        }}>
        {(updateBook,{loading,error,called})=>{
            return (
        
                    <fieldset disabled={loading} aria-busy={loading}>
                        <div className="row">
                            <div className="col-12 grid-margin">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="text-center" style={{marginBottom:'50px'}}>UPDATE BOOK</h4>
                                        <div className="form-sample">
                                            <p className="card-description">Book Details</p>
                                            <div className="row">
                                                <InputGroup
                                                    type="text"
                                                    label="Title"
                                                    name="title"
                                                    info = {this.state.title.length}
                                                    onChange={this.onChange}
                                                    id="title"
                                                    value={this.state.title}
                                                />
                                                <InputGroup
                                                    type="text"
                                                    label="Author"
                                                    name="author"
                                                    value={this.state.author}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Publisher</label>
                                                        <div className="col-sm-9">
                                                            <Query query={GET_PUBLISHERS_QUERY}>
                                                                {({data,error,loading})=>{
                                                                    if(loading) return (
                                                                        <select className="form-control" name="publisher" id="publisher" onChange={this.onChange}>
                                                                            <option value="">-SELECT-PUBLISHER-</option>
                                                                        </select>
                                                                    );
                                                                    
                                                                    
                                                                    return(
                                                                    <select className="form-control" name="publisher" id="publisher" onChange={this.onChange}>
                                                                        <option value="">-SELECT-PUBLISHER-</option>
                                                                        {data.getPublishers.map((publisher,index)=><SelectOption key={index} value={publisher.name} text={publisher.name}/>)}
                                                                    </select>
                                                                    );
                                                                }}
                                                            </Query>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Category</label>
                                                        <div className="col-sm-9">
                                                            <Query query={GET_CATEGORIES_QUERY}>
                                                                {({data,error,loading})=>{
                                                                    if(loading) return (
                                                                        <select className="form-control" name="category" id="category" onChange={this.onChange}>
                                                                            <option value="">-SELECT-CATEGORY-</option>
                                                                        </select>
                                                                    );
                                                                    return(
                                                                        <select className="form-control" name="category" id="category" onChange={this.onChange}>
                                                                            <option value="">-SELECT-CATEGORY-</option>
                                                                            {data.getCategories.map((category,index)=><SelectOption key={index} value={category.name} text={category.name}/>)}
                                                                        </select>
                                                                    );
                                                                }}
                                                            </Query>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Subject</label>
                                                        <div className="col-sm-9">
                                                        <select className="form-control" name="subject" id="subject" onChange={this.onChange}>
                                                            <option value="">-SELECT-SUBJECT-</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Type</label>
                                                        <div className="col-sm-9">
                                                            <Query query={GET_TYPES_QUERY}>
                                                                {({data,error,loading})=>{
                                                                    if(loading) return (
                                                                        <select className="form-control" name="type" id="type" onChange={this.onChange}>
                                                                            <option value="">-SELECT-TYPE-</option>
                                                                        </select>
                                                                    );
                                                                    return(
                                                                        <select className="form-control" name="type" id="type" onChange={this.onChange}>
                                                                            <option value="">-SELECT-TYPE-</option>
                                                                            {data.getTypes.map((type,index)=><SelectOption key={index} value={type.name} text={type.name}/>)}
                                                                        </select>
                                                                    );
                                                                }}
                                                            </Query>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Edition</label>
                                                        <div className="col-sm-9">
                                                            <select className="form-control" name="edition" id="edition" onChange={this.onChange}>
                                                                <option value="">-SELECT-EDITION-</option>
                                                                <option value="2019">2019</option>
                                                                <option value="2018">2018</option>
                                                                <option value="2017">2017</option>
                                                                <option value="2016">2016</option>
                                                                <option value="2015">2015</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <InputGroup
                                                    label="Quantity"
                                                    name="quantity"
                                                    type="number"
                                                    value={this.state.quantity}
                                                    onChange = {this.onChange}/>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Detail</label>
                                                        <div className="col-sm-9">
                                                            <textarea
                                                                rows="6"
                                                                className="form-control" 
                                                                name="detail"
                                                                id="detail"
                                                                onChange={this.onChange}
                                                                value= {this.state.detail}>{this.state.detail}
                                                            </textarea>
                                                            {this.state.detail.length>0 && <small>{this.state.detail.length} | 160 Characters Typed</small>}
                                                            
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Description</label>
                                                        <div className="col-sm-9">
                                                            <textarea
                                                                rows="6"
                                                                className="form-control" 
                                                                name="description" 
                                                                id="description"
                                                                onChange={this.onChange}
                                                                value={this.state.description}>{this.state.description}
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <InputGroup
                                                    label="MRP"
                                                    name="mrp"
                                                    type="number"
                                                    value={this.state.mrp}
                                                    onChange = {this.onChange}/>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Tags</label>
                                                        <div className="col-sm-9">
                                                            <form onSubmit={this.addTag} id="book-tag-form">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" name="tag" value={this.state.tag} onChange={this.onChange} autoComplete="off" id="tag-textbox"/>
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-outline-secondary" type="submit">ADD</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <br/>
                                                            <div className="book-tags-div" id="book-tags">{tagsArray}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Slug</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" name="slug" value={this.state.slug} onChange={this.onChange}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group row">
                                                        <div className="col-sm-12">
                                                            <div className="dropzone text-center" id="dropzone" onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop}>
                                                                <div className="dropzone-text" id="dropzone-text">
                                                                    {!imageArray.length && <p>Drop book Images Here</p>}
                                                                </div>
                                                                <div className="dropzone-images" id="dropzone-images" style={{position:'absolute', padding:'15px'}}>
                                                                    {imageArray}
                                                                    
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="note">
                                                <p className="text-danger">* Maximum 5 files can be upload.</p>
                                                <p className="text-danger">* Allowed extension are jpg, png, jpeg, JPG.</p>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="text-center col-md-12">
                                               
                                                            <Error error={error}/>
                                                    
                                                            
                                                            <input type="submit" className="btn btn-success" onClick={async e=>{
                                                                e.preventDefault();
                                                                const res = await updateBook();
                                                                this.setState({title: '', author: '', publisher: '', category: '', subject: '', type: '', edition: '', quantity: '', detail: '',description: '', mrp: '',
                                                                tags: [], tag: '', images:[],slug: ''});
                                                                resetSelectElement(document.getElementById('publisher'));
                                                                resetSelectElement(document.getElementById('category'));
                                                                resetSelectElement(document.getElementById('type'));
                                                                resetSelectElement(document.getElementById('edition'));
                                                                resetSelectElement(document.getElementById('subject'));
                                                                document.getElementById('detail').style.border = '1px solid #f2f2f2';
                                                                document.getElementById('title').style.border = '1px solid #f2f2f2';
                                                                var list = document.getElementById('dropzone-images')
                                                                while (list.hasChildNodes()) {   
                                                                    list.removeChild(list.firstChild);
                                                                }
                                                                Router.push('/books');
                                                            }} value="UPDATE" />
                                                       
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    );
                    }}

                    </Mutation>
                
           

            
            
        
        
    )
  }
}

export default Edit;
