import React from 'react'

function TextareaGroup({
    id,
    name,
    placeholder,
    value,
    label,
    error,
    info,
    onChange,
    disabled
}) {
  return (
    <div className="col-md-6">
        <div className="form-group row">
            <label className="col-sm-3 col-form-label">{label}</label>
            <div className="col-sm-9">
                <textarea
                    rows="6"
                    className="form-control" 
                    name={name} 
                    id={id}
                    
                    disabled={disabled} 
                    onChange={onChange}>
                    {value}
                </textarea>
                {info>0 && <small>{info} | 160 Characters Typed</small>}
                {error && <small className="text-danger">{error}</small>}
            
            </div>
        </div>
    </div>
  )
}

export default TextareaGroup;
