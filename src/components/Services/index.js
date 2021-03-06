import React, { useState } from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-7.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Confira nossas opções de crédito</ServicesH1>
      <ServicesWrapper>
        <ServicesCard to="/signin">
          <ServicesIcon src={Icon1} />
          <ServicesH2>Crédito automotivo</ServicesH2>
          <ServicesP>
            Se você deseja comprar um veículo, mas precisa de um empréstimo para
            te ajudar, você pode contratar um crédito
            automotivo.
          </ServicesP>
        </ServicesCard>
        <ServicesCard to="/signin">
          <ServicesIcon src={Icon2} />
          <ServicesH2>Crédito consignado</ServicesH2>
          <ServicesP>
            O valor da parcela é descontado direto na folha de pagamento.É
            oferecido a servidores e colaboradores credenciados.
          </ServicesP>
        </ServicesCard>
        <ServicesCard to="/signin">
          <ServicesIcon src={Icon3} />
          <ServicesH2>Crédito para habitação</ServicesH2>
          <ServicesP>
            O crédito para habitação é disponibilizado para a aquisição, reforma
            ou construção de imóveis.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
