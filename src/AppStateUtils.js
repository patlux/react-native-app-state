import React from 'react';

export const isFn = _ => typeof _ === 'function';
export const renderChildren = (children, args) => {
  return isFn(children) ? children(args) : children;
};
export const capitalize = str => str[0].toUpperCase() + str.slice(1);
