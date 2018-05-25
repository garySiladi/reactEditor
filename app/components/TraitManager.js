import React, { Component, Fragment } from 'react';
import TraitManagerHeader from './TraitManagerHeader';
import TraitListContainer from '../containers/TraitListContainer';

export default class TraitManager extends Component {
  render() {
    return (
      <Fragment>
        <TraitManagerHeader />
        <TraitListContainer />
      </Fragment>
    );
  }
}
