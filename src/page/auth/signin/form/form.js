import React from 'react'
import { Form } from 'formik'
import CustomInput from '../../../../components/form-sprites/input'
export default function SignupForm (props){
    const { submitForm } = props
    return (
      <>
        <h1>Subscribe!</h1>
          <Form>
            <CustomInput
              label="First Name"
              name="firstName"
            />
            <button onClick={submitForm}>Submit</button>
          </Form>
      </>
    )
  }