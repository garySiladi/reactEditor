// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { arrayToTree } from 'performant-array-to-tree';
// import type { hierarchyComponentType } from '../reducers/projectStructure';
import getColor from '../config/colors';
import DropTargetComponentWrapper from '../containers/DropTargetComponentWrapper';

const PlasmaEditorStyled = styled.div`
  background: white;
  color: ${getColor('primary')};
  flex-basis: 100vh;
  box-shadow: inset 0px 0px 0px 5px white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  isPlasmaSelected: boolean,
  hierarchy: any
};

export default class PlasmaEditor extends Component<Props> {
  createList = (component: any) => {
    const { data } = component;
    const {
      viewName,
      id,
      type,
      parentID,
      componentID,
      componentData,
      componentHTMLTag
    } = data;
    const componentProps = {
      viewName,
      type,
      key: id,
      id,
      parentID,
      componentID,
      componentData,
      componentHTMLTag
    };
    return React.createElement(
      DropTargetComponentWrapper,
      componentProps,
      component.children.map(element => this.createList(element))
    );
  };

  render() {
    const hierarchyArray = arrayToTree(this.props.hierarchy, {
      id: 'id',
      parentId: 'parentID'
    });
    if (!this.props.isPlasmaSelected)
      return <PlasmaEditorStyled>KORTE</PlasmaEditorStyled>;
    return (
      <PlasmaEditorStyled>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {this.createList(hierarchyArray[0])}
        </div>
      </PlasmaEditorStyled>
    );
  }
}
