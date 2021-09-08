import React from 'react'
import { FormControl, Form } from 'react-bootstrap'

const LabeledInput = ({id, type="text", placeholder="", value, handler, children}) => (
  <>
    <Form.Label htmlFor={id} className="label" srOnly>{children}</Form.Label>
    <FormControl
      id={id}
      placeholder={placeholder}
      type={type}
      onChange={handler}
      value={value}
    />
  </>
)

export default LabeledInput