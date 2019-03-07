import React, { Component } from 'react'
import Note from './../components/Notes/Note';

export default class notes extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body" id="chat-body" style={{ background : '#f2f8f9',padding: '15px'}}>
                        <Note date = "12 July 2018" value="Hello this is my first note, and I am just testing this note app."/>
                        <Note date = "12 July 2018" value="Hello this is my first note, and I am just testing this note app."/>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    )
  }
}
