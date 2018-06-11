// @flow
import { connect } from 'react-redux';
import {
  selectMainframeCategory,
  PLASMA_VIEW
} from '../actions/mainFrameHeader';
import PlasmaEditor from '../components/PlasmaEditor';

function mapStateToProps(state) {
  return {
    isPlasmaSelected: state.mainFrameSelector === PLASMA_VIEW,
    hierarchy: state.projectStructure.hierarchy,
    projectName: state.projectStructure.projectName,
    author: state.projectStructure.author
  };
}

const mapDispatchToProps = dispatch => ({
  selectMainframeCategory: category => {
    dispatch(selectMainframeCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlasmaEditor);
