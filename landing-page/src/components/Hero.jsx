import styled from 'styled-components';
import Button from './Button';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gradient};
  color: #ffffff;
  text-align: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Hero = () => (
  <HeroSection>
    <Title>Transforme Suas Ideias em Realidade</Title>
    <Subtitle>Com nossa landing page profissional, o céu é o limite!</Subtitle>
    <Button>Começar Agora</Button>
  </HeroSection>
);

export default Hero;
