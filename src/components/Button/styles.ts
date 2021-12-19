import styled from "@emotion/styled";
import { Button as MUIButton } from "@mui/material";
import mq from "src/utils/mq";

export const Base = styled(MUIButton)`
  max-width: none;
  ${mq("sm")} {
    max-width: 13.75em;
  }
`;
