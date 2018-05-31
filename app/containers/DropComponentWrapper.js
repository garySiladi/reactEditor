// @flow
import { connect } from 'react-redux';
import { addComponent } from '../actions/projectStructure';
import DropComponent from '../components/DropComponent';

function mapStateToProps(state) {
  return {
    hierarchy: state.projectStructure.hierarchy
  };
}

const mapDispatchToProps = dispatch => ({
  addComponent: category => {
    dispatch(addComponent(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DropComponent);
