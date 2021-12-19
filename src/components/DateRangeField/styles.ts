import styled from "@emotion/styled";
import { TextField as MuiTextField } from "@mui/material";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import space from "src/utils/space";
import em from "src/utils/em";
import mq from "src/utils/mq";

export const Base = styled.div`
  position: relative;
  width: 100%;
  ${mq("sm")} {
    display: flex;
    align-items: center;

    & > :first-child {
      margin-right: ${em(12)};
    }

    & > :last-child {
      margin-left: ${em(12)};
    }
  }
`;

export const Icon = styled(TodayOutlinedIcon)`
  pointer-events: none;
  width: ${em(18)};
  height: ${em(18)};
  color: ${({ theme }) => theme.palette.primary.light};
`;

export const TextField = styled(MuiTextField)`
  position: relative;
  margin-top: ${space(1)};
  margin-bottom: ${space(1)};
  ${mq("sm")} {
    margin-top: 0%;
    margin-bottom: 0;
  }
`;
