import * as adsManager from '@sortable/ads';
import * as React from 'react';

export interface AdProps {
  id: string;
}

export default class Ad extends React.Component<AdProps, any> {
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
