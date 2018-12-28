import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FullCard from './FullCard';
import { updateTask, createComment } from '../../actions';
import { getTaskById, getCommentsByTaskId, getLastCommentId } from './../../selectors';

const mapStateToProps = state => {
  return {
    task: getTaskById(state),
    comments: getCommentsByTaskId(state),
    users: state.users,
    taskId: state.global.openTaskId,
    lastCommentId: getLastCommentId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateTask,
      createComment
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullCard);
