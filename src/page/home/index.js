import { connect } from 'react-redux'
import Home from './home'
import { createCorporationAction } from  '../../services/corporation/action'

const mapStateToProps = ({ createCorporationReducer }) => ({
    createCorporationReducer
})

export default connect(mapStateToProps, {createCorporationAction})(Home)