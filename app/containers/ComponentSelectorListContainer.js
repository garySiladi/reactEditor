// @flow
import { connect } from 'react-redux';
import ComponentSelectorList from '../components/ComponentSelectorList';

function mapStateToProps(state) {
  return { bottomSelectedList: state.bottomSelectedList };
}

export default connect(mapStateToProps)(ComponentSelectorList);
