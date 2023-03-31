# yet-another-gatsby-project

The Gatsby project that uses styled-component and TypeScript.

## Styled Components

In this project, *CSS* or *SASS* are not being used. Instead, all styles are defined programmatically through a library
called [*Styled Components*](https://styled-components.com/).

### Responsiveness

This project already has functionality for handling different size windows sizes.

Example of how to use it:

*Example.style.tsx*

```typescript
import styled from 'styled-components';
import { breakpointUp, breakpointDown } from 'helpers/style';

/* Component style */
export const StyledExample = styled.div`
  background-color: antiquewhite;

  /* Background color changes to aqua
  from breakpoint MD (768px) */
  ${breakpointUp.MD} {
    background-color: aqua;
  }

  /* Background color is set to purple
  untill breakpoint LG (992px) */
  ${breakpointDown.LG} {
    background-color: purple;
  }
`;
```
