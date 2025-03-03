import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 10px;
  border-radius: 16px;
  width: 320px;
  max-width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
