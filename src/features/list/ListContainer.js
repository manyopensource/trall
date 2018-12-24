import { connect } from 'react-redux';
import List from './List';
import { createGetTasksByListId } from '../../selectors';

const mapStateToProps = () => {
  const getTasksByListId = createGetTasksByListId();
  return (state, props) => {
    return {
      tasks: getTasksByListId(state, props.id)
    };
  };
};

export default connect(mapStateToProps)(List);
