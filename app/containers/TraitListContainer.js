// @flow
import { connect } from 'react-redux';
import { selectComponent } from '../actions/selectComponent';
import TraitList from '../components/TraitList';

function mapStateToProps(state) {
  return { selectedComponent: state.selectedComponent };
}

const mapDispatchToProps = dispatch => ({
  selectComponent: component => {
    dispatch(selectComponent(component));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TraitList);
