import React from 'react';
import PropTypes from 'prop-types';

/**
 * CalcDisplay component
 * @param {object} props
 */
export const CalcDisplay = ({ output, input }) => (
  <div class="calc-display">
    <span class="calc-display__output">{output}</span>
    <span class="calc-display__input">{input}</span>
  </div>
);

CalcDisplay.propTypes = {
  output: PropTypes.string,
  input: PropTypes.string,
};

export default CalcDisplay;
