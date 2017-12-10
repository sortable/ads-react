import * as React from 'react';
import { Ad } from './ad';

export interface TimeRefreshAdProps {
  id: string;
  interval: number;
}

export interface TimeRefreshAdState {
  refreshCount: number;
}

/**
 * Refresh ad by interval
 *
 * Usage:
 *   <TimeRefreshAd id="div-id-1" interval={30} />
 *
 * ^ Above example will refresh the ad every 30s automatically.
 */
export class TimeRefreshAd extends React.Component<TimeRefreshAdProps, TimeRefreshAdState> {
  private timer: number|null;

  constructor(props: TimeRefreshAdProps) {
    super(props);
    this.state = { refreshCount: 0 };
    this.timer = null;
  }

  public componentDidMount() {
    this.resetTimer();
  }

  public shouldComponentUpdate(nextProps: TimeRefreshAdProps, nextState: TimeRefreshAdState) {
    return this.props.id !== nextProps.id ||
      this.props.interval !== nextProps.interval ||
      this.state.refreshCount !== nextState.refreshCount;
  }

  public componentDidUpdate(prevProps: TimeRefreshAdProps) {
    if (this.props.id !== prevProps.id || this.props.interval !== prevProps.interval) {
      this.resetTimer();
    }
  }

  public componentWillUnmount() {
    this.clearTimer();
  }

  public render() {
    return React.createElement(Ad, {
      id: this.props.id,
      refreshKey: this.state.refreshCount.toString(),
    });
  }

  private clearTimer() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private resetTimer() {
    this.clearTimer();
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        return { refreshCount: prevState.refreshCount + 1 };
      });
    }, this.props.interval * 1000);
  }
}
