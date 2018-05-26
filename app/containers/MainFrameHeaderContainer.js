// @flow
import { connect } from 'react-redux';
import { selectMainframeCategory } from '../actions/mainFrameHeader';
import MainFrameHeader from '../components/MainFrameHeader';

function mapStateToProps(state) {
  return {
    mainFrameSelector: state.mainFrameSelector
  };
}

const mapDispatchToProps = dispatch => ({
  selectMainframeCategory: category => {
    dispatch(selectMainframeCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainFrameHeader);
