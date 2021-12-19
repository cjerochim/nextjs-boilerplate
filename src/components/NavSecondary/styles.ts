import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { IconButton as MUIIconButton } from "@mui/material";
import space from "src/utils/space";
import em from "src/utils/em";

export const Base = styled.div`
  position: relative;
`;

export const BaseHeader = styled.header`
  position: relative;
  padding-bottom: ${space(1)};
`;

export const Title = styled.a`
  position: relative;
  display: block;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.h3.fontFamily};
  font-size: ${({ theme }) => em(theme.typography.h3.fontSize)};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
`;

export const BaseBody = styled.div`
  position: relative;
`;

export const IconButton = styled(MUIIconButton)`
  /* Adjust to align with primary navigation heading */
  margin-bottom: 2.1em;
  left: ${space(-1)};
`;

export const Pong = styled(motion.div)`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.text.primary};
  width: ${em(5)};
  height: ${em(26)};
`;

export const BaseList = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
`;
