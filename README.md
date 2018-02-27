# Sortable Ads Manager React Component

This repo exposes a thin wrapper which connects [Sortable Ad Manager](https://github.com/sortable/ads) to a React Component.

### Installation

Install ads manager's React component with following command:

```
$ npm install @sortable/ads-react --save
```

Then following [Sortable Ads Manager Guide (Quick Start)](http://dev.sortable.com/ads/#/quick-start)
to install ads manager (`@sortable/ads`).

**NOTE**: this package (`@sortable/ads-react`) does not have a dependency on the `@sortable/ads` package, but does use it for testing. To allow for ease of distribution to a variety of users, and to increase the maintainability of said distribution, we have decided to expect the user include Ads Manager as an external script (following Ads Manager Guide).

### Usage

After installed `@sortable/ads` and `@sortable/ads-react`, you can start to use it:

##### Step 1: Setup Ads Configuration

[Ads manager guide](http://dev.sortable.com/ads) has detailed guide to consume `sortableads` API.

**NOTE**
The sortableads global variable is exposed from `@sortablea/ads-react` so that the user does not have to define the variable, but this does not refer to the NPM module `@sortable/ads`. The ads manager script must be included as an external script in order for the API to be loaded asynchronously, and callbacks should be used for API calls.

```js
import { sortableads } from '@sortable/ads-react';

sortableads.push(() => {
  sortableads.useGPTAsync();

  sortableads.defineAds([
    {
      elementId: 'div-id-1',
      sizes: [300, 250],
      GPT: {
        adUnitPath: '/6355419/Travel/Europe/France/Paris',
      },
    }
  ]);

  sortableads.start();
});
```

##### Step 2: Use Its React Component to Request Ads

Instead of using `sortableads.requestAds` or `sortableads.destroyAds`, you should use
`Ad` or `TimeRefreshAd` from `@sortable/ads-react` package to send ad request.
The built-in components will handle the lifetime of ad and call `sortableads.requestAds` and `sortableads.destroyAds`
when needed.

```jsx
import React, { Component } from 'react';
import { Ad } from '@sortable/ads-react';

class App extends Component {
  render() {
    return (
      <Ad id="div-id-1" />
    );
  }
}
```

### Example

Check `example` directory for example usage.

### Build (for Contributor)

First, run `npm install` to install all the required dependencies.

Afterwards, the available commands to run are:

* `npm run clean` - clean distributable artifacts
* `npm run build` - build distributable artifacts
* `npm run test` - run tests with MochaJS
