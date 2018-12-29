import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initData } from './actions';
import { getUsers } from './selectors';
import App from './App';

const mapStateToProps = state => {
  return {
    lists: state.lists,
    global: state.global
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      initData
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
