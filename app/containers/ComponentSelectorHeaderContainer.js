// @flow
import { connect } from 'react-redux';
import { changeBottomCategory } from '../actions/componentSelectorHeader';
import ComponentSelectorHeader from '../components/ComponentSelectorHeader';

function mapStateToProps(state) {
  return {
    bottomCategoryState: state.bottomCategoryState
  };
}

const mapDispatchToProps = dispatch => ({
  changeBottomCategory: category => {
    dispatch(changeBottomCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ComponentSelectorHeader
);
