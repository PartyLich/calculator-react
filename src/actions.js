export const OUTPUT_SET = 'OUTPUT_SET';
export const OUTPUT_APPEND = 'OUTPUT_APPEND';
export const OUTPUT_CLEAR = 'OUTPUT_CLEAR';

import createAction from './lib/createAction';

export const setOutput = createAction(OUTPUT_SET);
export const appendOutput = createAction(OUTPUT_APPEND);
export const clearOutput = createAction(OUTPUT_CLEAR);

