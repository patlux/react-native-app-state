import React from 'react';

const APP_STATES = ['active'];

const withStateListener = WrappedComponent =>
  hoistNonReactStatics(
    class WithStateListenerComponent extends React.PureComponent {
      static propTypes = {};
      static defaultProps = {};

      constructor(props) {
        super(props);
        this.state = {
          appState: 'active',
        };
        __DEV__ && console.warn('Not implemented for web yet');
      }

      // --------------------------------------------------------------------------------------------- -
      // RENDER

      render() {
        return <WrappedComponent {...this.props} appState={this.state.appState} />;
      }
    },
    WrappedComponent
  );

export default withStateListener;
