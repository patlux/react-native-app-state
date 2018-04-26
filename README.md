# react-native-app-state

[![npm version](https://badge.fury.io/js/react-native-app-state.svg)](https://badge.fury.io/js/react-native-app-state)

`react-native-app-state` is a declarative way to use react-native's [AppState](https://facebook.github.io/react-native/docs/appstate.html).
Internally it uses the new [React 16.3 Context API](https://reactjs.org/docs/context.html).

## Getting started

### Requirements

Because this library uses the new React 16.3 Context API, you need at least React 16.3.

### Installation

##### [Yarn](https://yarnpkg.com/) (recommended)

`$ yarn add react-native-app-state`

##### [npm](https://www.npmjs.com/)

`$ npm install react-native-app-state --save`

### Usage

See the example project under `example/`

```jsx
import AppState from 'react-native-app-state';

class App extends React.PureComponent {
  onAppStateChange = (appState, prevAppState) => {
    console.log(this.constructor.name, 'onAppStateChange()', prevAppState, '=>', appState);
    // E.g. output: "App onAppStateChange() background => active"
  };

  render() {
    return (
      <View>
        <AppState onChange={this.onAppStateChange}>
          {({ appState }) => (
            <View>
              <Text style={styles.text}>App state: {appState}</Text>
            </View>
          )}
        </AppState>
        {/* ------ OR ------ */}
        <AppState onChange={this.onAppStateChange}>
          <AppState.Active>
            <Text>App is active</Text>
          </AppState.Active>
          <AppState.Inactive>
            <Text>App is inactive</Text>
          </AppState.Inactive>
          <AppState.Background>
            <Text>App is in background</Text>
          </AppState.Background>
        </AppState>
      </View>
    );
  }
}
```

## ToDO

* [ ] Add support for web
* [ ] Add tests
