const isObject = (obj) => typeof obj === 'object';
// Recursively Object.freeze(obj) on all unfrozen properties
// of obj that are functions or objects.
export const deepFreeze = (obj) => {
  if (isObject(obj)) {
    for (const prop of Object.keys(obj)) {
      if (obj.hasOwnProperty(prop)) {
        obj[prop] = deepFreeze(obj[prop]);
      }
    }
    return Object.freeze(obj);
  }

  return Object.freeze(obj);
};

export default deepFreeze;
