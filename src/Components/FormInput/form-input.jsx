import React from 'react';

import './form-input.scss';

const FormInput = React.forwardRef(({ label, id, ...props }, ref) => {
  const labelRef = React.useRef();

  const handleChange = (event) => {
    if (event.target.value) {
      labelRef.current.classList.add('shrink');
    } else {
      labelRef.current.classList.remove('shrink');
    }
  }

  return (
    <div className="form-input">
      <input id={id} className="form-input__input" {...props} ref={ref} onChange={handleChange} />
      {
        label ? <label htmlFor={id} className="form-input__label" ref={labelRef}>{label}</label> : null
      }
    </div>
  )
});

export default FormInput;