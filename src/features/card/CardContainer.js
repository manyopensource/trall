import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask, openCard } from './../../actions';
import Card from './Card';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTask,
      openCard
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Card);