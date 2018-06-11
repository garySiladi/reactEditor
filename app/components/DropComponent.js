// @flow
import * as React from 'react';
import uniqueString from 'unique-string';
import { DragSource } from 'react-dnd';

const boxSource = {
  beginDrag: props => props,

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    if (dropResult && dropResult.type === 'container') {
      props.addComponent({
        viewName: props.componentName,
        componentID: props.componentID,
        id: uniqueString(),
        type: props.type,
        componentData: props.traits,
        componentHTMLTag: props.componentHTMLTag,
        parentID: dropResult.id
      });
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

type Props = {
  isDragging: boolean,
  connectDragSource: any,
  children: React.Node
};

class DropComponent extends React.Component<Props> {
  render() {
    const { isDragging, connectDragSource, children } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(<div style={{ opacity }}>{children}</div>);
  }
}

export default DragSource('component', boxSource, collect)(DropComponent);
