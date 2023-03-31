import styled from 'styled-components';
import SomeSVG from '/static/images/some.svg';

export const AnimatedSomeSVG = styled(SomeSVG)`
  width: 8rem;
  height: 8rem;

  #skin {
    transition: fill 500ms;
  }

  #skin-shadow {
    transition: fill 500ms;
  }

  #eyes {
    transition: fill 100ms;
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
