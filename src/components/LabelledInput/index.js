import React from 'react'

import './index.css'

export default ({ id, label, multiline, hideLabel = false, ...rest }) => {
  const inputId = id || `input-${Math.floor(Math.random() * 9999999)}`
  const Element = multiline ? 'textarea' : 'input'
  return (
    <div className="labelled-input">
      <label htmlFor={inputId} className={hideLabel ? 'sr-only' : ''}>{label}</label>
      <Element className="input" id={inputId} rows={multiline ? 2 : undefined} {...rest} />
    </div>
  )
}
