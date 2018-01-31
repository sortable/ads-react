# Sortable Ads React Wrapper

This repo exposes a thin wrapper which connects [Sortable Ad Manager](https://github.com/sortable/ads) to a React Component.

### Build

To build, you must have NodeJS and NPM installed on your environment.

First, run `npm install` to install all the required dependencies.

You should then see a warning about missing the @sortable/ads peerDependency. This is a dependency that you must install manually using `npm install @sortable/ads`. This is required as the version of @sortable/ads and @sortable/react must match for certain version subsets.

Afterwards, the available commands to run are:

* `npm run clean` - clean distributable artifacts
* `npm run build` - build distributable artifacts
* `npm run build-example` - build bundled JS for the example page
* `npm run test` - run tests with MochaJS

Open the example locally at examples/index.html.

### Explicit Dependencies

@sortable/ads is declared as a peer dependency. To ensure that this library works as intended, make sure that the version matches the version of @sortable/ads.
