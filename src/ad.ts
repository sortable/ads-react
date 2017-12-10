import * as adsManager from '@sortable/ads';
import * as React from 'react';

export interface AdProps {
  id: string;
  refreshKey?: string;
}

/**
 * Define and display ad
 *
 * Usage:
 *   <Ad id="div-id-1" />
 */
export class Ad extends React.Component<AdProps, any> {
  public componentDidMount() {
    // adsManager.requestAds([this.props.id]);
  }

  public shouldComponentUpdate(nextProps: AdProps) {
    return this.props.id !== nextProps.id || this.props.refreshKey !== nextProps.refreshKey;
  }

  public componentWillUpdate(nextProps: AdProps) {
    if (this.props.id !== nextProps.id) {
      // adsManager.destroyAds([this.props.id]);
    }
  }

  public componentDidUpdate(prevProps: AdProps) {
    if (this.props.id !== prevProps.id || this.props.refreshKey !== prevProps.refreshKey) {
      // adsManager.requestAds([this.props.id]);
    }
  }

  public componentWillUnmount() {
    // adsManager.destroyAds([this.props.id]);
  }

  public render() {
    return React.createElement('div', { id: this.props.id });
  }
}
