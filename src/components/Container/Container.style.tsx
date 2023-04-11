import styled, { css } from 'styled-components';
import { breakpointUp } from 'helpers/style';

interface ContainerProps {
  $row?: boolean;
  $fluid?: boolean;
  $widthAuto?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ $row }) => ($row ? 'row' : 'column')};
  margin-right: auto;
  margin-left: auto;

  padding-right: 0.75rem;
  padding-left: 0.75rem;

  ${({ $widthAuto }) =>
    $widthAuto !== true &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.$fluid !== true &&
    css`
      ${breakpointUp.SM} {
        max-width: 540px;
      }

      ${breakpointUp.MD} {
        max-width: 720px;
      }

      ${breakpointUp.LG} {
        max-width: 960px;
      }

      ${breakpointUp.XL} {
        max-width: 1140px;
      }

      ${breakpointUp.XXL} {
        max-width: 1320px;
      }
    `}
`;
