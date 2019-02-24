import React from 'react'


function InputGroup({
    name,
    id,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) {
  return (
    <div className="col-md-6">
        <div className="form-group row">
            <label className="col-sm-3 col-form-label">{label}</label>
            <div className="col-sm-9">
                <input 
                type={type} 
                id={id}
                className="form-control" 
                name={name} 
                disabled={disabled} 
                value={value} 
                onChange={onChange}
                value = {value}/>
            {info>0 && <small>{info} | 60 Characters Typed</small>}
            {error && <small className="texxt-danger">{error}</small>}
            
                
            </div>
            
        </div>
    </div>
  )
}

export default InputGroup;
