import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTask } from '../../actions';
import { getLastTaskId } from '../../selectors';
import AddCard from './AddCard';

const mapStateToProps = state => {
  return {
    lastTaskId: getLastTaskId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createTask
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);