import * as React from 'react';
import TraitColor from './TraitColor';
import TraitPadding from './TraitPadding';
import TraitWrapper from '../../containers/traits/TraitContainer';

const traits = { color: TraitColor, padding: TraitPadding };

const getTraitComponent = traitName => (
  <TraitWrapper component={traits[traitName]} traitName={traitName} />
);

export default getTraitComponent;
