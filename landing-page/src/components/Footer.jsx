import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => (
  <FooterContainer>
    <SocialLinks>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        📸
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        💼
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        🐦
      </a>
    </SocialLinks>
    <Copyright>
      © {new Date().getFullYear()} Todos os direitos reservados. Feito com ❤️ por Você.
    </Copyright>
  </FooterContainer>
);

export default Footer;
