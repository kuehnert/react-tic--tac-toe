import React from 'react';
import { CSSTransition } from 'react-transition-group';

const FadeTransition = props => (
  <CSSTransition
    classNames="fade"
    timeout={100}
    {...props}
    addEndListener={(node, done) => {
      node.addEventListener('transitionend', done, false);
    }}
  />
);

export default FadeTransition;
