import { connect } from 'react-redux'
import SigninForm from './form'

const mapStateToProps = ({ createCorporationReducer }) => ({
    createCorporationReducer
})

export default connect(mapStateToProps)(SigninForm)