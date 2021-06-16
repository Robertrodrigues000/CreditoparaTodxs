import React, { useState } from "react";
import { Container, Button, CreditH1, CreditWrap, Icon } from "./creditServiceElements";
import {Modal} from "../Modal"

function CreditService() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Icon to="/">CréditoParaTodxs</Icon>
        <CreditH1>Selecione sua oferta de crédito</CreditH1>
        <CreditWrap>
          <Button onClick={openModal}> I'm a modal1</Button>
          <Button> I'm a modal2</Button>
          <Button> I'm a modal3</Button>
          <Modal showModal={showModal} setShowModal={setShowModal}/>
        </CreditWrap>
      </Container>
    </>
  );
}

export default CreditService;

/* 
        <CreditWrap>
          <CreditIcon />
          <CreditH2></CreditH2>
          <CreditP></CreditP>
        </CreditWrap>
        <CreditWrap>
          <CreditIcon />
          <CreditH2></CreditH2>
          <CreditP></CreditP>
        </CreditWrap>
        <CreditWrap>
          <CreditIcon />
          <CreditH2></CreditH2>
          <CreditP></CreditP>
        </CreditWrap> */