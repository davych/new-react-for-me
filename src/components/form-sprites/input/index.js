import React from 'react'
import { useField } from 'formik'
import TextField from '@material-ui/core/TextField'
export default function CustomeTextInput ({ ...props }) {
    const [field, meta] = useField(props);
    const error = Boolean(meta.touched && meta.error)
    return (
      <>
        <TextField
          {...field} {...props}
          error={error}
          helperText={meta.touched && meta.error ? meta.error : ''}
        />
      </>
    );
  }