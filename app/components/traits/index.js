import * as React from 'react';
import TraitWrapper from '../../containers/traits/TraitContainer';
import TraitColor from './TraitColor';
import TraitBackgroundColor from './TraitBackgroundColor';
import TraitPadding from './TraitPadding';
import TraitMargin from './TraitMargin';
import TraitFontSize from './TraitFontSize';
import TraitContent from './TraitContent';
import TraitBackgroundURL from './TraitBackgroundURL';
import TraitHeight from './TraitHeight';
import TraitWidth from './TraitWidth';
import TraitClick from './TraitClick';

export const traits = {
  color: TraitColor,
  padding: TraitPadding,
  margin: TraitMargin,
  backgroundColor: TraitBackgroundColor,
  backgroundURL: TraitBackgroundURL,
  fontSize: TraitFontSize,
  content: TraitContent,
  height: TraitHeight,
  width: TraitWidth,
  click: TraitClick
};

export const traitViewnames = {
  color: 'COLOR',
  padding: 'PADDING',
  margin: 'MARGIN',
  backgroundColor: 'BACKGROUND COLOR',
  backgroundURL: 'IMAGE',
  fontSize: 'TEXT SIZE',
  content: 'CONTENT',
  height: 'HEIGHT',
  width: 'WIDTH',
  click: 'REDIRECT'
};

export type traitProps = {
  changeComponentTrait: (string, string) => {},
  traitValue: string
};

const getTraitComponent = traitName => (
  <TraitWrapper component={traits[traitName]} traitName={traitName} />
);

export default getTraitComponent;
