export const OUTPUT_SET = 'OUTPUT_SET';
export const OUTPUT_APPEND = 'OUTPUT_APPEND';
export const OUTPUT_CLEAR = 'OUTPUT_CLEAR';

export const INPUT_SET = 'INPUT_SET';
export const INPUT_APPEND = 'INPUT_APPEND';
export const INPUT_REPLACE = 'INPUT_REPLACE';

export const OPERATOR_ADD = 'OPERATOR_ADD';
export const OPERATOR_CLEAR = 'OPERATOR_CLEAR';
export const OPERATOR_REPLACE = 'OPERATOR_REPLACE';

export const OPERAND_ADD = 'OPERAND_ADD';
export const OPERAND_CLEAR = 'OPERAND_CLEAR';
export const OPERAND_APPEND = 'OPERAND_APPEND';

export const ISOPERATOR_TOGGLE = 'ISOPERATOR_TOGGLE';

export const ROOT_RESET = 'ROOT_RESET';

import createAction from './lib/createAction';

export const setInput = createAction(INPUT_SET);
export const appendInput = createAction(INPUT_APPEND);
export const replaceInput = createAction(INPUT_REPLACE);

export const setOutput = createAction(OUTPUT_SET);
export const appendOutput = createAction(OUTPUT_APPEND);
export const clearOutput = createAction(OUTPUT_CLEAR);

export const addOperator = createAction(OPERATOR_ADD);
export const replaceOperator = createAction(OPERATOR_REPLACE);
export const clearOperator = createAction(OPERATOR_CLEAR);

export const addOperand = createAction(OPERAND_ADD);
export const appendOperand = createAction(OPERAND_APPEND);
export const clearOperand = createAction(OPERAND_CLEAR);

export const toggleIsOperator = createAction(ISOPERATOR_TOGGLE);

export const resetRoot = createAction(ROOT_RESET);
