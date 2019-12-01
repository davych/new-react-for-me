import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import CustomInput from '../../../../components/form-sprites/input'
export default function SignupForm (){
    return (
      <>
        <h1>Subscribe!</h1>
        <Formik
          initialValues={{
            firstName: 'aaa'
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .required('Required')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <CustomInput
              label="First Name"
              name="firstName"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
    )
  }