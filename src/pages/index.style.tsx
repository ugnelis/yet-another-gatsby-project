import styled from 'styled-components';
import SomeSVG from '/static/images/some.svg';

export const AnimatedSomeSVG = styled(SomeSVG)`
  #skin {
    transition: fill 300ms;
  }

  #skin-shadow {
    transition: fill 300ms;
  }

  #eyes {
    transition: fill 300ms;
  }

  &:hover {
    #skin {
      fill: #ff9f9f;
    }

    #skin-shadow {
      fill: #e97777;
    }

    #eyes {
      fill: #e00101;
    }
  }
`;

export const StyledIndexPage = styled.div``;
