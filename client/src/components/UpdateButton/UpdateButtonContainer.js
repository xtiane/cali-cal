import {connect} from 'react-redux';
import * as actions from '../../actions';
import UpdateButton from './UpdateButton'; 
import * as selectors from '../../selectors';

const mapStateToProps = (state) => ({
  taskId: selectors.getCurrentTask(state),
  newEvent: selectors.getSelectedEvent(state),
  formErrors: selectors.getFormErrors(state),
  isAllDay: state.reducer.allDay,
  redirectHome: state.reducer.redirectHome,
});

const mapDispatchToProps = (dispatch) => ({
  updateTask: (event, allDay)=> dispatch(actions.updateTask(event, allDay)),
  setFormErrors: (errors) => dispatch(actions.setFormErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateButton);