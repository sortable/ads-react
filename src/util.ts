const getGlobal = (): any => {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  // @ts-ignore: global exists in node.js env
  if (typeof global !== 'undefined') {
    // @ts-ignore: global exists in node.js env
    return global;
  }
  return {}; // we don't care
};

const GLOBAL = getGlobal();

export const ADS_REACT_VERSION = '0.0.2';

export const sortableads: any = GLOBAL.sortableads = GLOBAL.sortableads || [];
