# react-native-app-state

## Getting started

### Installation

##### [Yarn](https://yarnpkg.com/) (recommended)

`$ yarn add react-native-app-state`

##### [npm](https://www.npmjs.com/)

`$ npm install react-native-app-state --save`

### Usage

See the example project under `example/`

```jsx
import AppState from 'react-native-app-state';

<AppState>
  <AppState.Active>
    <Text style={styles.welcome}>App is active</Text>
  </AppState.Active>
  <AppState.Inactive>
    <Text style={styles.welcome}>App is inactive</Text>
  </AppState.Inactive>
  <AppState.Background>
    <Text style={styles.welcome}>App is in background</Text>
  </AppState.Background>
</AppState>;
```

## ToDO

* [ ] Add support for web
