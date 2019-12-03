import { connect } from 'react-redux'
import Home from './home'
import { actions } from  '../../services/corporation'

const mapStateToProps = ({ createCorporationReducer }) => ({
    createCorporationReducer
})

const mapDispatchToProps = dispatch => {
    return {
      createCorporation: payload => dispatch(actions.createCorporationAction.trigger(payload))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)