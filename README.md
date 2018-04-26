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

class App extends React.PureComponent {
  onAppStateChange = (appState, prevAppState) => {
    console.log(this.constructor.name, 'onAppStateChange()', prevAppState, '=>', appState);
    // E.g. output: "App onAppStateChange() background => active"
  };

  render() {
    return (
      <View>
        <AppState>
          {({ appState }) => (
            <View>
              <Text style={styles.text}>App state: {appState}</Text>
            </View>
          )}
        </AppState>
        {/* -- OR -- */}
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
