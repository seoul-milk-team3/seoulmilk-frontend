import styled from "@emotion/styled";
import { colors } from "@/styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.8rem;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${colors.grayscale_90};
`;

export const SubTitle = styled.p`
  font-size: 1.8rem;
  color: ${colors.grayscale_40};
`;
