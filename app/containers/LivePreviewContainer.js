// @flow
import { connect } from 'react-redux';
import { selectComponent } from '../actions/selectComponent';
import { removeComponent } from '../actions/projectStructure';
import LivePreview from '../components/LivePreview';

function mapStateToProps(state) {
  return { selectedComponent: state.selectedComponent };
}

const mapDispatchToProps = dispatch => ({
  selectComponent: component => {
    dispatch(selectComponent(component));
  },
  removeComponent: id => {
    dispatch(removeComponent(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LivePreview);
