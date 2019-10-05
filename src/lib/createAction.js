const id = (value) => value;

const createAction = (type = '', payLoadFn = id) => (payload) => {
  if (type === '') {
    throw new Error('FSA error: action must have a type property');
  }
  return typeof payload === 'undefined'
    ? { type }
    : {
      type,
      payload: payLoadFn(payload),
    };
};

export default createAction;
