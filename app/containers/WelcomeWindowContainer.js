// @flow
import { connect } from 'react-redux';
import { openProject } from '../actions/isProjectOpened';
import WelcomeWindow from '../components/WelcomeWindow';

function mapStateToProps(state) {
  return { isProjectOpened: state.isProjectOpened };
}

const mapDispatchToProps = dispatch => ({
  openProject: () => dispatch(openProject(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeWindow);
