import PropTypes from 'prop-types';
import React from 'react';

import AppStateContext from './AppStateContext';
import { renderChildren } from './AppStateUtils';

const withAppStateConsumer = appStates => {
  const WithAppStateComponent = ({ children, ...otherProps }) => {
    return (
      <AppStateContext.Consumer>
        {context => {
          return appStates.indexOf(context.appState) !== -1
            ? renderChildren(children, context)
            : null;
        }}
      </AppStateContext.Consumer>
    );
  };
  WithAppStateComponent.displayName = `withAppStateConsumer([${appStates}])`;
  WithAppStateComponent.propTypes = { children: PropTypes.any };
  return WithAppStateComponent;
};

const withToArrayTransformer = wrapped => param =>
  Array.isArray(param) ? wrapped(param) : wrapped([param]);

export default withToArrayTransformer(withAppStateConsumer);
