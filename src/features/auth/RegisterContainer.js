import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './Register';
import { createUser } from '../../actions';
import { getLastUserId } from './../../selectors';

const mapStateToProps = state => {
  return {
    lastUserId: getLastUserId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
