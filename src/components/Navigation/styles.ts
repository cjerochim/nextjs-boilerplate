import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import mq from "src/utils/mq";
import space from "src/utils/space";

export const Base = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const BaseHeader = styled.header`
  position: relative;
  padding-top: ${space()};
  padding-bottom: ${space(1)};
  display: flex;
  justify-content: flex-start;
  padding-left: ${space(4)};
  padding-right: ${space(4)};
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.grey[800]}`};

  > :first-child {
    margin-right: ${space(1)};
  }

  ${mq("md")} {
    display: none;
  }
`;

export const BaseBody = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
  padding: 3em 2em 1em 2em;
  ${mq("md")} {
    padding: 2.7em 2em 1em 1em;
    /* padding: 3em 1em 1em 1em; */
  }
`;

export const BaseFooter = styled.footer`
  position: relative;
  padding: ${space()};
`;

export const CloseButton = styled(IconButton)`
  position: relative;
  left: -0.5em;
`;
