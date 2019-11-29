import { connect } from 'react-redux'
import Home from './home'
import { actions } from  '../../services/corporation'

const mapStateToProps = ({ corporation }) => ({
    data: corporation.data,
    isFetching: corporation.isFetching,
    error: corporation.error
})

export default connect(mapStateToProps, actions)(Home)