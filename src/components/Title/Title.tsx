import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, className, tabIndex = 0 }) => (
  <h2 tabIndex={tabIndex} className={`section-title ${className}`}>{title}</h2>
);

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Title;
