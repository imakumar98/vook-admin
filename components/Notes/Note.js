import React from 'react';


function Note(props) {
  return (
    <div class="note-item" style={{ padding : '15px', background : '#FFF', marginBottom : '15px' }}>
        <div class="note-title">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <div class="date pull-left">
                        <span>{props.date}</span>
                    </div>
                    <div class="date pull-right">
                        <span><i class="fa fa-trash"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="note-body">
            <p>{props.value}</p>
        </div>
    </div>

  )
}

export default Note;
