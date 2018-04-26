import PropTypes from 'prop-types';
import React from 'react';

import AppStateContext, { DEFAULT_VALUE } from './AppStateContext';
import { renderChildren, capitalize } from './AppStateUtils';
import withAppStateConsumer from './withAppStateConsumer';
import withStateListener from './withStateListener';

const APP_STATES = ['active', 'background', 'inactive'];

class AppState extends React.PureComponent {
  static propTypes = {
    appState: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.any,
  };
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      context: { ...DEFAULT_VALUE, appState: props.appState },
    };
  }

  // --------------------------------------------------------------------------------------------- -
  // COMPONENT

  static getDerivedStateFromProps(nextProps, prevState) {
    const currentAppState = prevState.context.appState;
    const nextAppState = nextProps.appState;
    if (currentAppState !== nextAppState) {
      return {
        context: {
          ...prevState.context,
          appState: nextAppState,
        },
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const currentAppState = this.state.context.appState;
    const prevAppState = prevState.context.appState;
    if (this.props.onChange && currentAppState !== prevAppState) {
      this.props.onChange(currentAppState, prevAppState);
    }
  }

  // --------------------------------------------------------------------------------------------- -
  // RENDER

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <AppStateContext.Provider {...otherProps} value={this.state.context}>
        {renderChildren(children, this.state.context)}
      </AppStateContext.Provider>
    );
  }
}

APP_STATES.forEach(appState => (AppState[capitalize(appState)] = withAppStateConsumer(appState)));

AppState.Foreground = withAppStateConsumer(['active', 'inactive']);
AppState.Consumer = AppStateContext.Consumer;

const AppStateWithListener = withStateListener(AppState);
export default AppStateWithListener;
