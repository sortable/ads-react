import '@sortable/ads';

interface Window {
  googletag: any;
}

declare var window: Window;

// setting script
sortableads.setBidderTimeout(1000);

sortableads.registerGPT({
  init(cb) {
    window.googletag = window.googletag || {};
    window.googletag.cmd = window.googletag.cmd || [];
    window.googletag.cmd.push(() => {
      window.googletag.pubads().disableInitialLoad();
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
      cb();
    });
  },
  defineUnit(divId) {
    if (divId === 'regular') {
      return window.googletag.defineSlot('/6355419/Travel/Europe/France/Paris',
        [300, 250], divId).addService(window.googletag.pubads());
    } else if (divId === 'refresh') {
      return window.googletag.defineSlot('/19968336/header-bid-tag-0',
        [[300, 250], [300, 600]], divId).addService(window.googletag.pubads());
    } else if (divId === 'time-refresh') {
      return window.googletag.defineSlot('/19968336/header-bid-tag1',
        [[728, 90], [970, 90]], divId).addService(window.googletag.pubads());
    }
  },
  requestGPT(context) {
    context.newIds.forEach((newIds) => {
      window.googletag.display(newIds);
    });
    window.googletag.pubads().refresh(context.units);
  },
});
