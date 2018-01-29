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

### Dependencies

Note that @sortable/ads is a peer dependency. To ensure that the library works as intended, make sure that the version of this library matches the version of @sortable/ads.