// @flow
import * as React from 'react';
import { DragSource } from 'react-dnd';

const boxSource = {
  beginDrag: props => props,

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`); // eslint-disable-line no-alert
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
