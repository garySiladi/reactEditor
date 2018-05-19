// @flow
import React, { Component } from 'react';
import MainViewComponent from '../components/MainView';

type Props = {};

export default class MainViewContainer extends Component<Props> {
  props: Props;

  render() {
    return <MainViewComponent />;
  }
}
