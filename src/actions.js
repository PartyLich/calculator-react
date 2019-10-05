export const OUTPUT_SET = 'OUTPUT_SET';
export const OUTPUT_APPEND = 'OUTPUT_APPEND';
export const OUTPUT_CLEAR = 'OUTPUT_CLEAR';

export const INPUT_SET = 'INPUT_SET';
export const INPUT_APPEND = 'INPUT_APPEND';
export const INPUT_REPLACE = 'INPUT_REPLACE';

import createAction from './lib/createAction';

export const setInput = createAction(INPUT_SET);
export const appendInput = createAction(INPUT_APPEND);
export const replaceInput = createAction(INPUT_REPLACE);

export const setOutput = createAction(OUTPUT_SET);
export const appendOutput = createAction(OUTPUT_APPEND);
export const clearOutput = createAction(OUTPUT_CLEAR);

