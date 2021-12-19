import styled from "@emotion/styled";
import space from "src/utils/space";
import mq from "src/utils/mq";
import em from "src/utils/em";

export const Base = styled.div`
  position: relative;
  padding: ${space()};
  display: flex;
`;

export const BaseLeading = styled.div`
  position: relative;
  width: ${({ theme }) => em(theme.app.navWidthXS)};
  padding-left: ${space(6.5)};
  display: flex;
  ${mq("md")} {
    padding-left: 0;
    width: ${({ theme }) => em(theme.app.navWidthMD)};
  }
`;

export const BaseMenu = styled.div`
  position: absolute;
  left: -0.6em;
  z-index: 100;
  /* Hide option on larger screens  */
  ${mq("md")} {
    display: none;
  }
`;

export const BaseBody = styled.div`
  position: relative;
  display: none;
  ${mq("md")} {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const BaseActions = styled.div`
  position: relative;
`;
