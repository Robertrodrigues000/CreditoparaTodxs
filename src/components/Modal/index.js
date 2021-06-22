import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import ReactDom from "react-dom"
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  ButtonModal
} from "./modalElements";

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      console.log("cliquei");
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return ReactDom.createPortal(
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>Contrato de adesão</h1>
                <p>
                  O contrato de Empréstimo pessoal (o “Contrato”) celebrado via
                  termo de adesão (o “Termo de Adesão”), com o DEVEDOR, e a HS
                  FINANCEIRA, instituição financeira, inscrita no CNPJ sob o nº
                  07.512.441/0001-11, com sede na cidade de Dois Irmãos/RS, na
                  BR 116, n. 7070 (o “CREDOR”), será regido nos seguintes
                  termos: DEFINIÇÕES Quando utilizados nestas cláusulas grifados
                  dessa forma, salvo disposição expressa em sentido contrário,
                  os termos descritos abaixo, terão os seguintes significados:
                  a) Credor: instituição financeira responsável pela concessão
                  do crédito; b) Devedor: pessoa física tomadora do crédito e
                  responsável pelo pagamento das despesas realizadas; c) Dívida:
                  valor principal do Empréstimo descrito no Termo de Adesão,
                  acrescido dos juros, tributos, tarifas, taxas, seguros e
                  demais encargos previstos no Contrato. d) Termo de Adesão:
                  documento com as informações do DEVEDOR e da operação de
                  crédito contratada, em conjunto com este documento, constitui,
                  para todos os fins legais, verdadeiro Contrato de Adesão;
                </p>
                
                <ButtonModal to="/">Aceito os termos</ButtonModal>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>,
    document.getElementById('portal')
  );
};
