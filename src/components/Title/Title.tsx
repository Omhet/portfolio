import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Title = ({ title, className }) => (
  <h2 className={classnames('section-title', className)}>{title}</h2>
);

Title.propTypes = {
  classnames: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Title;
