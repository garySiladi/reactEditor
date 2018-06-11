import * as React from 'react';
import TraitWrapper from '../../containers/traits/TraitContainer';
import TraitColor from './TraitColor';
import TraitBackgroundColor from './TraitBackgroundColor';
import TraitPadding from './TraitPadding';
import TraitMargin from './TraitMargin';
import TraitFontSize from './TraitFontSize';
import TraitContent from './TraitContent';

export const traits = {
  color: TraitColor,
  padding: TraitPadding,
  margin: TraitMargin,
  backgroundColor: TraitBackgroundColor,
  fontSize: TraitFontSize,
  content: TraitContent
};

export const traitViewnames = {
  color: 'COLOR',
  padding: 'PADDING',
  margin: 'MARGIN',
  backgroundColor: 'BACKGROUND COLOR',
  fontSize: 'TEXT SIZE',
  content: 'CONTENT'
};

export type traitProps = {
  changeComponentTrait: (string, string) => {},
  traitValue: string
};

const getTraitComponent = traitName => (
  <TraitWrapper component={traits[traitName]} traitName={traitName} />
);

export default getTraitComponent;
