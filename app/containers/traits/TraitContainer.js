// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { changeComponentTrait } from '../../actions/selectComponent';
import { traits } from '../../components/traits';

function mapStateToProps(state, ownProps) {
  const foundObject = state.selectedComponent.componentData.find(
    elem => elem.name === ownProps.traitName
  );
  return {
    selectedComponent: state.selectedComponent,
    traitValue: foundObject.value
  };
}

const mapDispatchToProps = dispatch => ({
  changeComponentTrait: (traitName, value) => {
    dispatch(changeComponentTrait(traitName, value));
  }
});

type Props = {
  traitName: string
};

class TraitContainer extends React.Component<Props> {
  render() {
    const Comp = traits[this.props.traitName];
    return <Comp {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TraitContainer);
