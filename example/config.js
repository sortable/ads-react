import { sortableads } from '../src/util';

// setting script
sortableads.push(() => {
  sortableads.set('bidderTimeout', 1000);

  sortableads.defineAds([
    {
      elementId: 'regular',
      sizes: [300, 250],
      GPT: {
        adUnitPath: '/6355419/Travel/Europe/France/Paris',
      },
    },
    {
      elementId: 'refresh',
      sizes: [[300, 250], [300, 600]],
      GPT: {
        adUnitPath: '/19968336/header-bid-tag-0',
      },
    },
    {
      elementId: 'time-refresh',
      sizes: [[728, 90], [970, 90]],
      GPT: {
        adUnitPath: '/19968336/header-bid-tag1',
      },
    },
  ]);

  sortableads.useGPTAsync();
  sortableads.start();
});
