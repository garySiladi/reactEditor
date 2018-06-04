// @flow
import { connect } from 'react-redux';
import { selectComponent } from '../actions/selectComponent';
import { removeComponent } from '../actions/projectStructure';
import TraitList from '../components/TraitList';

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

export default connect(mapStateToProps, mapDispatchToProps)(TraitList);
