import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
} from 'styled-system';

interface Props extends SpaceProps, LayoutProps, ColorProps {
  children: ReactNode;
}

const StyledBox = styled.div<Props>`
  ${space}
  ${layout}
  ${color}
`;

export default StyledBox;
