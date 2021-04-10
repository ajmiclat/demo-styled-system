import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
import styled from 'styled-components';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
} from 'styled-system';

interface Props extends SpaceProps, ColorProps, TypographyProps {
  children: ReactNode;
  as?: string | React.ComponentType<any> | LinkProps;
}

const StyledText = styled.p<Props>`
  margin: 0;

  ${space}
  ${color}
  ${typography}
`;

export default StyledText;
