import styled from "styled-components";

export const Header = styled.header`
  background-color: white;
  font-family: "Afacad Flux", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.img`
  margin-left: 16px;
  max-height: 80px; 
`

export const NavBar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 28px;
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    transition: color 0.3s ease;
    padding: 16px;
  }

  a:hover {
    border-radius: 2rem;
    padding: 1.6rem;
    background-color: #ebebeb;
    color: #333;
    font-weight: 800;
  }
`

export const LedLine = styled.div`
 width: 100%;
`