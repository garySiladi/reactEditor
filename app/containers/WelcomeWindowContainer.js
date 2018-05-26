// @flow
import { connect } from 'react-redux';
import { openProject } from '../actions/isProjectOpened';
import { createProject } from '../actions/projectStructure';
import WelcomeWindow from '../components/WelcomeWindow';

function mapStateToProps(state) {
  return { isProjectOpened: state.isProjectOpened };
}

const mapDispatchToProps = dispatch => ({
  openProject: () => dispatch(openProject(true)),
  createProject: data => dispatch(createProject(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeWindow);
