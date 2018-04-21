import { connect } from 'react-redux';
import Week from './Week';
import * as selectors from '../../selectors';
import * as actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    days: selectors.getDayAndCounts(state),
    selectedDay: state.selectedDay,
  }
}

const mapStateToDispatch = (dispatch) => ({
  changeDay: (day) => dispatch(actions.changeDateAction(day)),
});

export default connect(mapStateToProps, mapStateToDispatch)(Week);