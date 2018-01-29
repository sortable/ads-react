import '@sortable/ads';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Ad, TimeRefreshAd} from '../src/index';

interface Window {
  googletag: any;
}

declare var window: Window;

// setting script
sortableads.setBidderTimeout(1000);

function registerGPT() {
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
      if (divId === 'div-gpt-ad-1460505748561-0') {
        return window.googletag.defineSlot('/19968336/header-bid-tag-0',
          [[300, 250], [300, 600]], divId).addService(window.googletag.pubads());
      } else if (divId === 'div-gpt-ad-1460505661639-0') {
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
}

registerGPT();

class TestPage extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <h1>Regular Ad</h1>
          <Ad id='div-gpt-ad-1460505748561-0'/>,
        </div>
        <div>
          <h1>Time Refresh Ad</h1>
          <TimeRefreshAd id='div-gpt-ad-1460505661639-0' interval={2} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TestPage/>,
  document.getElementById('root'),
);
