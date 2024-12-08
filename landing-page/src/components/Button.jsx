import styled from 'styled-components';

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

export default Button;
