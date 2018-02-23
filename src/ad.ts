import * as React from 'react';
import { sortableads } from './util';

export interface AdProps {
  id: string;
  refreshKey?: string;
}

/**
 * We have 4 states to keep track of whether or not we need to perform
 * API calls based on how requests are queued before the API is ready.
 *
 * STATES:
 * 1 = sortableads not loaded, no pending ad request
 * 2 = sortableads not loaded, pending ad request
 * 3 = sortableads loaded, no ads requested
 * 4 = sortableads loaded, ads requested, the slot should be destroyed
 * before refreshing
 */
enum STATES {
  NOT_READY = 1,
  NOT_READY_PENDING,
  READY,
  READY_REQUESTED,
}

/**
 * Define and display ad
 *
 * Usage:
 *   <Ad id="div-id-1" />
 */
export class Ad extends React.Component<AdProps, any> {
  private requestState = STATES.NOT_READY;

  constructor(props: AdProps) {
    super(props);

    sortableads.push(() => {
      if (this.requestState === STATES.NOT_READY) {
        this.requestState = STATES.READY;
      } else if (this.requestState === STATES.NOT_READY_PENDING) {
        sortableads.requestAds([this.props.id]);
        this.requestState = STATES.READY_REQUESTED;
      }
    });
  }

  public componentDidMount() {
    if (this.requestState === STATES.READY) {
      sortableads.requestAds([this.props.id]);
      this.requestState = STATES.READY_REQUESTED;
    } else if (this.requestState === STATES.NOT_READY) {
      this.requestState = STATES.NOT_READY_PENDING;
    }
  }

  public shouldComponentUpdate(nextProps: AdProps) {
    return this.props.id !== nextProps.id || this.props.refreshKey !== nextProps.refreshKey;
  }

  public componentWillUpdate(nextProps: AdProps) {
    if (this.requestState === STATES.NOT_READY_PENDING) {
      this.requestState = STATES.NOT_READY;
    } else if (this.requestState === STATES.READY_REQUESTED) {
      if (this.props.id !== nextProps.id) {
        sortableads.destroyAds([this.props.id]);
      }
      this.requestState = STATES.READY;
    }
  }

  public componentDidUpdate(prevProps: AdProps) {
    if (this.props.id !== prevProps.id || this.props.refreshKey !== prevProps.refreshKey) {
      if (this.requestState === STATES.READY) {
        sortableads.requestAds([this.props.id]);
        this.requestState = STATES.READY_REQUESTED;
      } else if (this.requestState === STATES.NOT_READY) {
        this.requestState = STATES.NOT_READY_PENDING;
      }
    }
  }

  public componentWillUnmount() {
    if (this.requestState === STATES.READY_REQUESTED) {
    // the component will cease to exist after this fn ends, so don't need to track state anymore
      sortableads.destroyAds([this.props.id]);
    } else if (this.requestState === STATES.NOT_READY_PENDING) {
      // but if the api isn't ready, we need to guard against
      // componentDidMount -> componentWillUnmount -> sortableads ready -> unneeded requestAds!
      this.requestState = STATES.NOT_READY;
    }
  }

  public render() {
    return React.createElement('div', { id: this.props.id });
  }
}
