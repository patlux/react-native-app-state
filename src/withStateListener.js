import React from 'react';
import { AppState as RNAppState } from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';

const APP_STATES = ['active', 'background', 'inactive'];

const withStateListener = WrappedComponent =>
  hoistNonReactStatics(
    class WithStateListenerComponent extends React.PureComponent {
      static propTypes = {};
      static defaultProps = {};

      constructor(props) {
        super(props);
        this.state = {
          appState: RNAppState.currentState,
        };
      }

      // --------------------------------------------------------------------------------------------- -
      // COMPONENT

      componentDidMount() {
        this.addAppStateListener();
      }

      componentWillUnmount() {
        this.removeAppStateListener();
      }

      // --------------------------------------------------------------------------------------------- -
      // EVENTS

      addAppStateListener = () => {
        RNAppState.addEventListener('change', this.onAppStateChange);
      };

      removeAppStateListener = () => {
        RNAppState.removeEventListener('change', this.onAppStateChange);
      };

      onAppStateChange = appState => {
        if (__DEV__ && APP_STATES.indexOf(appState) === -1) {
          console.warn(this.constructor.name, `Received a unknown state: "${appState}".`);
        }
        this.setState({ appState });
      };

      // --------------------------------------------------------------------------------------------- -
      // RENDER

      render() {
        return <WrappedComponent {...this.props} appState={this.state.appState} />;
      }
    },
    WrappedComponent
  );

export default withStateListener;
