import './config';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Ad, TimeRefreshAd} from '@sortable/ads-react';

class App extends React.Component {
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

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
