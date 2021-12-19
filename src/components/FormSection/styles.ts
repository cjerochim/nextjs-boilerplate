import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import em from "src/utils/em";
import mq from "src/utils/mq";
import space from "src/utils/space";

export const Base = styled.section`
  position: relative;
  margin-top: ${space()};
  margin-bottom: ${space()};
  width: 100%;
  ${mq("md")} {
    display: flex;
    align-items: flex-start;

    > :first-child {
      margin-right: ${space()};
    }

    > :last-child {
      margin-left: ${space()};
    }
  }
`;

interface BaseGroupsProps {
  variant?: "default" | "inline";
}

export const BaseGroup = styled.div<BaseGroupsProps>`
  position: relative;

  ${mq("md")} {
    flex: 1;
    margin-left: ${({ variant }) =>
      variant === "inline" ? "0!important" : ""};
    margin-right: ${({ variant }) =>
      variant === "inline" ? "0!important" : ""};
  }
`;

export const BaseItem = styled.div`
  position: relative;
  /* Increase spacing to accomodate for alignment of Textarea on larger screens */
  margin-top: ${space(4.5)};
  margin-bottom: ${space(4.5)};
`;

interface BaseHeaderProps {
  noTitle?: boolean;
}

export const BaseHeader = styled.div<BaseHeaderProps>`
  position: relative;
  margin-bottom: 1em;
  min-height: ${({ noTitle }) => (noTitle ? "0" : space(3))};

  ${mq("md")} {
    min-height: ${space(3)};
  }
`;

interface BaseBodyProps {
  variant?: "default" | "inline";
}

export const BaseBody = styled.div<BaseBodyProps>`
  position: relative;
  > :first-child {
    margin-top: ${space()};
  }

  ${mq("md")} {
    display: ${({ variant }) => (variant === "inline" ? "grid" : "block")};
    grid-template-columns: 1fr 1fr;
    column-gap: ${space(4)};
    row-gap: ${space(4)};

    /* Assume FormItem will be the child */
    > .form-item {
      margin-top: ${({ variant }) => (variant === "inline" ? "0" : "")};
      margin-bottom: ${({ variant }) => (variant === "inline" ? "0" : "")};
    }

    > :first-child {
      margin-top: 0;
    }

    > :last-child {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled(Typography)`
  text-transform: uppercase;
`;

export const Description = styled(Typography)`
  position: relative;
  margin-top: ${space()};

  ${mq("md")} {
    min-height: ${em(100)};
  }
`;
