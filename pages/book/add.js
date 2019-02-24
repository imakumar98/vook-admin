import React, { Component } from 'react';
import InputGroup from './../../components/common/InputGroup';
import TextareaGroup from './../../components/common/TextareaGroup';
import axios from 'axios';
import $ from 'jquery';
import Tag from './../../components/Tag';

import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Error from './../../components/ErrorMessage';


const CREATE_BOOK_MUTATION = gql`
    mutation CREATE_BOOK_MUTATION($title: String!, $author: String!, $publisher: String!, $class: String!, $subject: String!, $category: String!, $edition: String, $quantity: Int!, $detail: String!, $description: String
                $mrp: Int!, $discount: Int!, $tags: [String!], $image1: String, $image2: String, $image3: String, $image4: String, $image5: String){
        createBook(title: $title, author: $author, publisher: $publisher, class: $class, subject: $subject, category: $category, edition: $edition, quantity: $quantity, detail: $detail, description: $description
                mrp: $mrp, discount: $discount, tags: $tags, image1: $image1, image2: $image2, image3: $image3, image4: $image4, image5: $image5
         ){
            id
            title
            publisher
            mrp
            detail
        }
    }
`;



class add extends Component {
    constructor(props){
        super();
        this.state = {
            title: '',
            author: '',
            publisher: '',
            class: '',
            subject: '',
            category: '',
            edition: '',
            quantity: '',
            detail: '',
            description: '',
            mrp: '',
            discount: '',
            tags: [],
            tag: '',
            image1:'',
            image2:'',
            image3:'',
            image4:'',
            image5:'',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.addTag = this.addTag.bind(this);
        this.removeTag = this.removeTag.bind(this);
        
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
        
                axios.post('http://localhost:5000/upload/vook/book', data, config)
                .then(res=>{
                    if(res.data.success){
                        var div = document.createElement('div');
                        div.className = 'dropzone-image';
                        div.innerHTML = '<img src="'+res.data.url+'" className="img-responsive" width="100px" height="200px">';
                        document.getElementById('dropzone-images').appendChild(div);
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
        if(e.target.name=='class'){
            document.getElementById('subject').innerHTML = '';
            if(e.target.value==9){
                var html = '';
                var subjects = ['Hindi','English','Maths','Science','History','Geography','Economics','Political Science']
                subjects.map((subject)=>{
                    html = html +  "<option value='"+subject+"'>"+subject+"</option>";
                    
                });
                document.getElementById('subject').innerHTML = html;
            }else if(e.target.value==10){
                var html = '';
                var subjects = ['Hindi','English','Maths','Science','History','Geography','Economics','Political Science']
                subjects.map((subject)=>{
                    html = html +  "<option value='"+subject+"'>"+subject+"</option>";
                    
                });
                document.getElementById('subject').innerHTML = html;
            }else if(e.target.value==11){
                var html = '';
                var subjects = ['Physics','Chemistry','Maths','English','Biology','Computer','Physical Education','Economics','Accounts','Business']
                subjects.map((subject)=>{
                    html = html +  "<option value='"+subject+"'>"+subject+"</option>";
                    
                });
                document.getElementById('subject').innerHTML = html;
            }else if(e.target.value==12){
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

    onSubmit(e){
        e.preventDefault();
        
        const book = {
            title: this.state.title,
            author: this.state.author,
            publisher: this.state.publisher,
            class: this.state.class,
            subject: this.state.subject,
            category: this.state.category,
            edition: this.state.edition,
            quantity: this.state.quantity,
            detail: this.state.detail,
            description: this.state.description,
            mrp: this.state.mrp,
            discount: this.state.discount,
            tags: this.state.tags
        }
        if(!book.title){
            return alert("Title is required");
        }
        console.log(book);
        
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

   render() {

    var tagsArray = this.state.tags.map((tag,index)=><Tag tag={tag} removeTag={this.removeTag} key={index} value={tag}/>)

    return (
        <Mutation mutation={CREATE_BOOK_MUTATION} variables={{
            title: this.state.title,
            author: this.state.author,
            publisher: this.state.publisher,
            class: this.state.class,
            subject: this.state.subject,
            category: this.state.category,
            edition: this.state.edition,
            quantity: 100,
            detail: this.state.detail,
            description: this.state.description,
            mrp: 100,
            discount: 5,
            tags: this.state.tags,
            image1: this.state.image1,
            image2: this.state.image2,
            image3: this.state.image3,
            image4: this.state.image4,
            image5: this.state.image5,
        }}>
        {(createBook,{error,loading})=>(
            <div className="row">
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="text-center" style={{marginBottom:'50px'}}>ADD BOOK</h4>
                        
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
                                />
                                <InputGroup
                                    type="text"
                                    label="Author"
                                    name="author"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="row">
                                <InputGroup
                                    type="text"
                                    label="Publisher"
                                    name="publisher"
                                    onChange={this.onChange}
                                />
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Class</label>
                                        <div className="col-sm-9">
                                            <select className="form-control" name="class" id="class" onChange={this.onChange}>
                                                <option value=""></option>
                                                <option value="9">Class 9</option>
                                                <option value="10">Class 10</option>
                                                <option value="11">Class 11</option>
                                                <option value="12">Class 12</option>
                                            </select>
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
                                            <option value="">-SELECT-SUBJECT--</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Category</label>
                                        <div className="col-sm-9">
                                            <select className="form-control" name="category" id="category" onChange={this.onChange}>
                                                <option value="">-SELECT-CATEGORY--</option>
                                                <option value="NCERT">NCERT</option>
                                                <option value="Refresher">Refresher</option>
                                                <option value="Sample Paper">Sample Paper</option>
                                                <option value="Competitive Exam">Competitive Exam</option>
                                            </select>
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
                                                    <option value="">-SELECT-EDITION--</option>
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
                                    onChange = {this.onChange}
                                />
                            </div>
                            <div className="row">
                                <TextareaGroup
                                    label="Detail"
                                    name="detail"
                                    info = {this.state.detail.length}
                                    onChange = {this.onChange}
                                    id="detail"
                                />
                                <TextareaGroup
                                    label="Description"
                                    name="description"
                                    onChange = {this.onChange}
                                />
                            </div>
                            
                            <div className="row">
                                <InputGroup
                                    label="MRP"
                                    name="mrp"
                                    type="number"
                                    onChange = {this.onChange}
                                />
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Discount</label>
                                        <div className="col-sm-9">
                                            <select className="form-control" onChange={this.onChange} name="discount">
                                                <option value="5">5%</option>
                                                <option value="10">10%</option>
                                                <option value="15">15%</option>
                                                <option value="20">20%</option>
                                                <option value="25">25%</option>
                                                <option value="30">30%</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
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
                            <br/>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <div className="dropzone text-center" id="dropzone" onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop}>
                                                <div className="dropzone-text" id="dropzone-text">
                                                    <p>Drop book Images Here</p>
                                                </div>
                                                <div className="dropzone-images" id="dropzone-images"></div>
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
                                    const res = await createBook();
                                    console.log(res);
                                    this.setState({title:'', author:''});
                                    
                                }} value="SAVE" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}

        </Mutation>
        
    )
  }
}

export default add;
