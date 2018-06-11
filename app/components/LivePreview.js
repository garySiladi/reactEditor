import * as React from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
import { getTypography, baseStep } from '../config/style-constants';

const StyledHeader = styled.div`
  font-family: Titillium Web;
  padding: ${baseStep(-2)};
  margin-bottom: ${baseStep(-2)};
  ${getTypography(-1)};
  border-bottom: 1px solid ${getColor('secondary')};
  color: ${getColor('secondary')};
`;

const StyledWrapper = styled.div`
  border-top: 1px solid ${getColor('greyhound')};
  padding: 0 ${baseStep(-2)} ${baseStep(-2)};
  flex-basis: 350px;
  display: flex;
  flex-direction: column;
`;

const LivePreviewWrapped = styled.div`
  background: ${getColor('white')};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 5px 5px;
  background-image: linear-gradient(
      to right,
      ${getColor('toolbar')} 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, ${getColor('toolbar')} 1px, transparent 1px);
`;

type Props = {
  selectedComponent: any
};

export default class ListView extends React.Component<Props> {
  render() {
    const { selectedComponent } = this.props;
    if (Object.keys(selectedComponent).length === 0) return null;
    if (selectedComponent.componentData.length === 0) return null;
    if (selectedComponent.type === 'container') return null;
    const { componentData = [] } = selectedComponent;
    const createProps = componentData.reduce((obj, item) => {
      const modValue = !Number.isNaN(Number(item.value))
        ? `${item.value}em`
        : item.value;
      return Object.assign({}, obj, { [item.name]: modValue });
    }, {});
    const selectedElementPreview = React.createElement(
      selectedComponent.componentHTMLTag,
      { style: createProps },
      createProps.content
    );
    return (
      <StyledWrapper>
        <StyledHeader>LIVE PREVIEW</StyledHeader>
        <LivePreviewWrapped>
          <div>{selectedElementPreview}</div>
        </LivePreviewWrapped>
      </StyledWrapper>
    );
  }
}
