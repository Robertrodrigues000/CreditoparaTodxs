import styled from "styled-components";
import { Link } from "react-router-dom"
import { MdClose } from "react-icons/md"


export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 600px;
  height: 700px;
  padding: 25px 20px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 2rem;
  }

`;

export const ButtonModal = styled(Link)`
  cursor: pointer;
  padding: 10px 24px;
  background: #141414;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 4px;
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;