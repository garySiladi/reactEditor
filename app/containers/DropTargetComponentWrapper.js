// @flow
import { connect } from 'react-redux';
import { selectMainframeCategory } from '../actions/mainFrameHeader';
import DropTargetComponent from '../components/DropTargetComponent';

function mapStateToProps(state) {
  return {
    hierarchy: state.projectStructure.hierarchy
  };
}

const mapDispatchToProps = dispatch => ({
  selectMainframeCategory: category => {
    dispatch(selectMainframeCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DropTargetComponent
);
