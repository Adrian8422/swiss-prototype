import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1e1e2f;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  margin: 0;
  transition: color 0.3s;

  &:hover {
    color: #a1c6ea;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #2a2a3a;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background: #3b3b4f;
    transform: translateY(-2px);
  }

  svg {
    stroke-width: 2;
    color: #ffffff;
  }
`;
