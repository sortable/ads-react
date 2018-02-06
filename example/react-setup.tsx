import './config';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Ad, TimeRefreshAd} from '../src/index';

interface TestPageState {
  clicks: number;
}

class TestPage extends React.Component<any, TestPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      clicks: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick(e: any) {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1,
    }));
  }

  public render() {
    return (
      <div>
        <div>
          <h1>Regular Ad</h1>
          <Ad id='regular'/>,
        </div>
        <div>
          <h1>Refresh Ad</h1>
          <button onClick={e => this.handleClick(e)}>
            Refresh Ad
          </button>
          <Ad id='refresh' refreshKey={this.state.clicks.toString()}/>,
        </div>
        <div>
          <h1>Time Refresh Ad</h1>
          <TimeRefreshAd id='time-refresh' interval={2} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TestPage/>,
  document.getElementById('root'),
);
