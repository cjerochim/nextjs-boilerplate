import styled from "@emotion/styled";
import mq from "src/utils/mq";
import space from "src/utils/space";

export const Base = styled.div`
  position: relative;
  outline: 1px solid blue;
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const BaseGroupPrimary = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  padding-left: ${space()};
  padding-right: ${space()};
  outline: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BaseGroupSecondary = styled.div`
  position: relative;
  display: none;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  ${mq("md")} {
    display: block;
  }
`;
