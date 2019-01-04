import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})
  // own props not child returned props
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch)
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)