import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from './List';
import { createGetTasksByListId } from '../../selectors';
import { updateList } from '../../actions';

const mapStateToProps = () => {
  const getTasksByListId = createGetTasksByListId();
  return (state, props) => {
    return {
      tasks: getTasksByListId(state, props.list.id)
    };
  };
};

const mapDispathToProps = dispatch => {
  return bindActionCreators(
    {
      updateList
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(List);
