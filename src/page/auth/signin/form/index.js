import Form from './form'
import { withFormik } from 'formik'
import * as Yup from 'yup'
const form = withFormik({
  mapPropsToValues: ({ props }) => {
    return {
        firstName: ''
    }
  },
  validationSchema: Yup.object({
    firstName: Yup.string()
      .required('Required')
  }),
  handleSubmit: (aa, bb) => {
      console.log(bb)
  }
})(Form)

export default form
