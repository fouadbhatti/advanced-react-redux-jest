# Advanced-react-redux-jest
Testable and modular sample react redux app with advanced concepts. 

## Introduction
This sample application allows you to add, remove, star friends. Also incorporates pagination if there are more than 2 friends.
It includes the following features:

### Testing - Using Enzyme, Jest, Puppeteer
- Comprehensive unit tests covering all parts of application such as reducers, actions, components etc
- Redux Store Flow Integration test
- Using Jest to mock functions and modules
- Using enzyme to test stateful components state + their actions/behaviors
- Snapshot testing for all presentational components

### Architecture & Concepts
- Structured into testable presentational and container components
- State managed with redux
- Higher order components
- Custom redux middleware
- React redux view
- Immutable state with immutable.js
- Binding action creators
- React SSR - server side rendering
- React router
- Higher order reducers
- Normalizing state shape
- Wrapping components in Error boundaries to catch errors omitted from components rendering 
- React portals for modal boxes
- Lifting state Up
- Form handling
- React refs + forward ref
- Performance optimization - react profiling / React.PureComponent - shouldComponentUpdate / React.memo functional components
- Strict mode for highlighting potential problems in an application <React.StrictMode>
- Uncontrolled components / refs
- Hooks using state and other react features without writing a class - React v16.7.0-alpha
- Hot reloading and time Travel
- Redux reselect selectors for encapsulation and performance
- Lazy loading components
- Using recompose library for using state in functional components, conditional rendering/branching, lifecycle hooks, composing higher order components

### Installation
```
yarn install
yarn start
Testing: yarn test
open http://localhost:3000
```
