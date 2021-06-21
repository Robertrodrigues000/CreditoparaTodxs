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

  @media screen and (max-width: 1000px) {
    height: 100%;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CreditCard = styled(Link)`
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content:flex-start;
  align-items: center;
  border-radius: 10px;
  max-width: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    border: 3px solid #2F2235;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CreditsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
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

export const CreditsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const CreditsP = styled.p`
  font-size: 1rem;
  text-align: justify;
`;
