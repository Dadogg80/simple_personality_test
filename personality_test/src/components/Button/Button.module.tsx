import styled, {css} from 'styled-components';
import { render } from '@testing-library/react';

const Button = styled.button` 
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: #db9827;
    margin: 0 1em;
    padding: 0.25em 1em;
`;


const Container = styled.div`
  text-align: center;
`

render(
    <Container>
      <Button>Normal Button</Button>
    </Container>
);

export default Button;