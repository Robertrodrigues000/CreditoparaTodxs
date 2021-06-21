import React, { useState } from "react";
import {
  Container,
  CreditCard,
  CreditH1,
  CreditWrap,
  Icon,
  CreditsIcon,
  CreditsH2,
  CreditsP,
} from "./creditServiceElements";
import { Modal } from "../Modal";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-7.svg";

function CreditService() {
  return (
    <>
      <Container>
        <Icon to="/">CréditoParaTodxs</Icon>
        <CreditH1>Selecione sua oferta de crédito</CreditH1>
        <CreditWrap>
          <CreditCard to="/signin">
            <CreditsIcon src={Icon1} />
            <CreditsH2>Crédito automotivo</CreditsH2>
            <CreditsP>
              Se você deseja comprar um veículo, o crédito automotivo é o ideal.
              Uma linha de financiamento feita especialmente para pessoas
              físicas, destinada à compra de carros/motos novos ou usados. Você
              pode financiar até 80% do valor do veículo, com taxas de juros
              pré-fixadas a partir de 1,49% ao mês e sem cobrança de tarifas
              adicionais.
            </CreditsP>
          </CreditCard>
          <CreditCard to="/signin">
            <CreditsIcon src={Icon2} />
            <CreditsH2>Crédito consignado</CreditsH2>
            <CreditsP>
              Se você deseja um cédito pessoal sem nenhuma complicação, o
              crédito consignado pode ter atender. Escolhendo esta modalidade
              você não tem a necessidade de avalista, com vantagens especiais e
              as melhores condições, para funcionários de empresas e órgãos
              conveniados, aposentados e pensionistas do INSS.
            </CreditsP>
          </CreditCard>
          <CreditCard to="/signin">
            <CreditsIcon src={Icon3} />
            <CreditsH2>Crédito habitacional</CreditsH2>
            <CreditsP>
              Com essa linha de financiamento, o CreditoParaTodx ajuda você e
              sua família a comprar seu imóvel novo ou usado e o seu FGTS pode
              fazer parte do pagamento. O financiamento é feito pelo Sistema
              Financeiro de Habitação e tem como garantia a alienação
              fiduciária. Aqui, você encontra financiamentos especiais,
              negociados caso a caso.
            </CreditsP>
          </CreditCard>
        </CreditWrap>
      </Container>
    </>
  );
}

export default CreditService;

/* 
        <CreditWrap>
          <CreditIcon />
          <CreditsH2></CreditsH2>
          <CreditP></CreditP>
        </CreditWrap>
        <CreditWrap>
          <CreditIcon />
          <CreditsH2></CreditsH2>
          <CreditP></CreditP>
        </CreditWrap>
        <CreditWrap>
          <CreditIcon />
          <CreditsH2></CreditsH2>
          <CreditP></CreditP>
        </CreditWrap> */
