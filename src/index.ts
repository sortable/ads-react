import * as React from 'react';
import { ADS_REACT_VERSION, sortableads  } from './util';

sortableads.push(() => {
  sortableads.set('reactVersion', React.version);
  sortableads.set('adsReactVersion', ADS_REACT_VERSION);
});

export { Ad, AdProps } from './ad';
export { TimeRefreshAd, TimeRefreshAdProps } from './time-refresh-ad';
