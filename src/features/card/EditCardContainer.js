import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTask } from '../../actions';
import EditCard from './EditCard';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateTask
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(EditCard);
