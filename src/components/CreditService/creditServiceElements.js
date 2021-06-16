import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    108deg,
    rgba(146, 18, 216, 1) 0%,
    rgba(197, 42, 160, 1) 100%
  );

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const Icon = styled(Link)`
  position: absolute;
  left: 32px;
  top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    left: 16px;
    top: 8px;
  }
`;

export const CreditWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }
`;

export const CreditH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 120px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
