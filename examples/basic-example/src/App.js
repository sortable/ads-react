import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@sortable/ads';
import { sortableads, Ad, TimeRefreshAd } from '@sortable/ads-react';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1,
    }));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Regular Ad</h1>
          <Ad id='regular'/>
        </div>
        <div>
          <h1>Refresh Ad</h1>
          <button onClick={e => this.handleClick(e)}>
            Refresh Ad
          </button>
          <Ad id='refresh' refreshKey={this.state.clicks.toString()}/>
        </div>
        <div>
          <h1>Time Refresh Ad</h1>
          <TimeRefreshAd id='time-refresh' interval={15}/>
        </div>
      </div>
    );
  }
}

export default App;
