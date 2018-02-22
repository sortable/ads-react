# Sortable Ads React Wrapper

This repo exposes a thin wrapper which connects [Sortable Ad Manager](https://github.com/sortable/ads) to a React Component.

### Build

To build, you must have NodeJS and NPM installed on your environment.

First, run `npm install` to install all the required dependencies.

Afterwards, the available commands to run are:

* `npm run clean` - clean distributable artifacts
* `npm run build` - build distributable artifacts
* `npm run build-example` - build bundled JS for the example page
* `npm run test` - run tests with MochaJS

Open the example locally at examples/index.html.

**NOTE**:
This package does not have a peer dependency on the @sortable/ads package, but does use it for testing. To allow for ease of distribution to a variety of users, and to increase the maintainability of said distribution, we have decided to expect the user include Ads Manager as an external script.

Include the following in the head portion of your HTML document (ensuring sortableads is instantiated before including your bundled React code):

```html
<script src="link to ads manager script" async></script>
```