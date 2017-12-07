import * as adsManager from '@sortable/ads';
import * as React from 'react';

export interface AdProps {
  id: string;
}

/**
 * Define and display ad
 *
 * Usage:
 *   <Ad id="div-id-1" />
 */
export class Ad extends React.Component<AdProps, any> {
  public componentDidMount() {
    adsManager.requestAds([this.props.id]);
  }

  public shouldComponentUpdate(nextProps: AdProps) {
    return this.props.id !== nextProps.id;
  }

  public componentDidUpdate(prevProps: AdProps) {
    if (this.props.id !== prevProps.id) {
      adsManager.destroyAds([prevProps.id]);
      adsManager.requestAds([this.props.id]);
    }
  }

  public componentWillUnmount() {
    adsManager.destroyAds([this.props.id]);
  }

  public render() {
    return React.createElement('div', { id: this.props.id });
  }
}

export interface TimeRefreshAdProps extends AdProps {
  interval: number;
}

/**
 * Refresh ad by interval
 *
 * Usage:
 *   <TimeRefreshAd id="div-id-1" interval={30} />
 *
 * ^ Above example will refresh the ad every 30s automatically.
 */
export class TimeRefreshAd extends React.Component<TimeRefreshAdProps, any> {
  private timer: number|null;

  constructor(props: TimeRefreshAdProps) {
    super(props);

    this.timer = null;
  }

  public componentDidMount() {
    this.resetTimer();
  }

  public shouldComponentUpdate(nextProps: TimeRefreshAdProps) {
    return this.props.id !== nextProps.id || this.props.interval !== nextProps.interval;
  }

  public componentWillUpdate(nextProps: TimeRefreshAdProps) {
    this.clearTimer();
  }

  public componentDidUpdate() {
    this.resetTimer();
  }

  public componentWillUnmount() {
    this.clearTimer();
  }

  public render() {
    return React.createElement(Ad, { id: this.props.id });
  }

  private clearTimer() {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }

  private resetTimer() {
    this.clearTimer();
    this.timer = setInterval(() => {
      // call requestAds again to refresh it
      adsManager.requestAds([this.props.id]);
    }, this.props.interval * 1000);
  }
}
