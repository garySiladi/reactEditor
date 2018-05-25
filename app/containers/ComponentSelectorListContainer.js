// @flow
import { connect } from 'react-redux';
import { selectComponent } from '../actions/selectComponent';
import ComponentSelectorList from '../components/ComponentSelectorList';

function mapStateToProps(state) {
  return { bottomSelectedList: state.bottomSelectedList };
}

const mapDispatchToProps = dispatch => ({
  selectComponent: component => {
    dispatch(selectComponent(component));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ComponentSelectorList
);