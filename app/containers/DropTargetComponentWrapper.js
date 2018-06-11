// @flow
import { connect } from 'react-redux';
import { selectMainframeCategory } from '../actions/mainFrameHeader';
import { selectComponent } from '../actions/selectComponent';
import DropTargetComponent from '../components/DropTargetComponent';

function mapStateToProps(state) {
  return {
    hierarchy: state.projectStructure.hierarchy,
    selectedComponent: state.selectedComponent
  };
}

const mapDispatchToProps = dispatch => ({
  selectMainframeCategory: category => {
    dispatch(selectMainframeCategory(category));
  },
  selectComponent: component => {
    dispatch(selectComponent(component));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DropTargetComponent
);
