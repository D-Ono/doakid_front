import styled from 'styled-components';

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding-top: 1.5rem;
  width: 100%;
  input {
    height: 3.5rem;
    width: 65%;
    border: 0.1rem solid var(--color-border);
    border-radius: 0.5rem;
    background: var(--color-input-background);
    
    :required {
      border-left-color: var(--color-primary);
    }
    
    :invalid {
      border-left-color: var(--color-border);
    }
  }
`;