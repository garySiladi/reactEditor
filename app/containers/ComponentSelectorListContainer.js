// @flow
import { connect } from 'react-redux';
import { changeBottomCategory } from '../actions/componentSelectorHeader';
import ComponentSelectorList from '../components/ComponentSelectorList';

function mapStateToProps(state) {
  return { bottomSelectedList: state.bottomSelectedList };
}

const mapDispatchToProps = dispatch => ({
  changeBottomCategory: category => {
    dispatch(changeBottomCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ComponentSelectorList
);
