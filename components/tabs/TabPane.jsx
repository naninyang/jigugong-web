import React from 'react';
import PropTypes from 'prop-types';

const TabPane = (props) => {
  return <fragment>{props.childern}</fragment>;
};

TabPane.propTypes = {
  name: PropTypes.string
};

export default TabPane;
