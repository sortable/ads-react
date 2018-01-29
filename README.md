# Sortable Ads React Wrapper

This repo exposes a thin wrapper which connects Sortable Ad Manager to a React Component.

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

A small note of what some of these dependencies are for:

* Enzyme / Enzyme-adapter-react-16: test react components, lifecycle, hierarchy.
* JSDom: required to mock the DOM on Node.JS, required by Enzyme's mount function
* Sinon: test timer related code synchronously