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

const WrappedInfo = styled.div`
  background: white;
  padding: 1em;
`;

const WrappedLive = styled.div`
  max-height: 540px;
  overflow: scroll;
`;

const WrappedInfoTitle = styled.div`
  display: inline-block;
  width: 300px;
`;

type Props = {
  isPlasmaSelected: boolean,
  isInfoSelected: boolean,
  isLiveViewSelected: boolean,
  hierarchy: any,
  author: string,
  projectName: string
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

  createLiveList = (component: any) => {
    const { data } = component;
    const {
      // viewName,
      id,
      // type,
      // parentID,
      // componentID,
      componentData,
      componentHTMLTag
    } = data;
    const createProps = componentData.reduce((obj, item) => {
      const modValue =
        !Number.isNaN(Number(item.value)) &&
        item.name !== 'backgroundURL' &&
        item.name !== 'fontWeight'
          ? `${item.value}em`
          : item.value;
      return Object.assign({}, obj, { [item.name]: modValue });
    }, {});
    const maxValues = { maxHeight: '100%', maxWidth: '100%' };
    const imageObject =
      createProps.backgroundURL && createProps.backgroundURL !== ''
        ? {
            src: createProps.backgroundURL
          }
        : {};
    const clickObject =
      createProps.click && createProps.click !== ''
        ? {
            href: createProps.click,
            target: '_blank'
          }
        : {};
    return React.createElement(
      componentHTMLTag,
      {
        key: id,
        style: { ...maxValues, ...createProps },
        ...imageObject,
        ...clickObject
      },
      component.children.length !== 0
        ? component.children.map(element => this.createLiveList(element))
        : createProps.content
    );
  };

  render() {
    const hierarchyArray = arrayToTree(this.props.hierarchy, {
      id: 'id',
      parentId: 'parentID'
    });
    if (this.props.isInfoSelected)
      return (
        <WrappedInfo>
          <div>
            <WrappedInfoTitle>PROJECT NAME: </WrappedInfoTitle>
            {this.props.projectName}
          </div>
          <div>
            <WrappedInfoTitle>PROJECT AUTHOR: </WrappedInfoTitle>
            {this.props.author}
          </div>
        </WrappedInfo>
      );
    if (this.props.isLiveViewSelected)
      return (
        <WrappedLive>
          <div>{this.createLiveList(hierarchyArray[0])}</div>
        </WrappedLive>
      );
    return (
      <PlasmaEditorStyled>
        <div style={{ overflow: 'scroll', clear: 'both', maxHeight: 540 }}>
          {this.createList(hierarchyArray[0])}
        </div>
      </PlasmaEditorStyled>
    );
  }
}
