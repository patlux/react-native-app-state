import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppState from 'react-native-app-state';

class App extends React.PureComponent {
  onAppStateChange = (appState, prevAppState) => {
    console.log(this.constructor.name, 'onAppStateChange()', prevAppState, '=>', appState);
    // E.g. output: "App onAppStateChange() background => active"
  };

  render() {
    return (
      <View style={styles.container}>
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
            <Text style={[styles.text, styles.title]}>App is active</Text>
          </AppState.Active>
          <AppState.Inactive>
            <Text style={[styles.text, styles.title]}>App is inactive</Text>
          </AppState.Inactive>
          <AppState.Background>
            <Text style={[styles.text, styles.title]}>App is in background</Text>
          </AppState.Background>
        </AppState>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
