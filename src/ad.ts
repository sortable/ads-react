import * as React from 'react';

declare var sortableads: any;

export interface AdProps {
  id: string;
  refreshKey?: string;
}

export interface AdState {
  api: any;
}

/**
 * Define and display ad
 *
 * Usage:
 *   <Ad id="div-id-1" />
 */
export class Ad extends React.Component<AdProps, any> {
  constructor(props: AdProps) {
      super(props);

      this.state = {
        api: [],
      };
  }

  public componentDidMount() {
    sortableads.push(() => {
      sortableads.requestAds([this.props.id]);
      this.setState({
        api: sortableads,
      });
    });
  }

  public shouldComponentUpdate(nextProps: AdProps, nextState: AdState) {
    return this.state.api !== nextState.api ||
      this.props.id !== nextProps.id ||
      this.props.refreshKey !== nextProps.refreshKey;
  }

  public componentWillUpdate(nextProps: AdProps) {
    if (this.props.id !== nextProps.id) {
      this.state.api.push(() => {
        this.state.api.destroyAds([this.props.id]);
      });
    }
  }

  public componentDidUpdate(prevProps: AdProps) {
    if (this.props.id !== prevProps.id || this.props.refreshKey !== prevProps.refreshKey) {
      this.state.api.push(() => {
        this.state.api.requestAds([this.props.id]);
      });
    }
  }

  public componentWillUnmount() {
    this.state.api.push(() => {
      this.state.api.destroyAds([this.props.id]);
    });
  }

  public render() {
    return React.createElement('div', { id: this.props.id });
  }
}
