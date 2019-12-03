import { connect } from 'react-redux'
import Home from './home'
import { actions } from  '../../services/corporation'

const mapStateToProps = ({ createCorporationReducer }) => ({
    createCorporationReducer
})

const createCorporation = actions.createCorporationAction.TRIGGER

export default connect(mapStateToProps, { createCorporation })(Home)