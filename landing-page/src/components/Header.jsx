import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.8rem;
`;

const Nav = styled.nav`
  a {
    color: ${({ theme }) => theme.colors.text};
    margin: 0 1rem;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>First LP with React</Logo>
    <Nav>
      <a href="#about">Sobre</a>
      <a href="#contact">Contato</a>
    </Nav>
  </HeaderContainer>
);

export default Header;
