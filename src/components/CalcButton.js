import React from 'react';
import PropTypes from 'prop-types';

/**
 * CalcButton component
 * @param {object} props
 */
export const CalcButton = ({ modifier, value, onClick }) => (
  <button
    className={'calc-button calc-button--' + modifier}
    onClick={() => {
      onClick(value);
    }}
  >
    {value}
  </button>
);

CalcButton.propTypes = {
  modifier: PropTypes.string.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CalcButton;
