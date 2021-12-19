import styled from "@emotion/styled";
import { motion } from "framer-motion";
import em from "src/utils/em";
import space from "src/utils/space";

export const Base = styled(motion.div)`
  position: relative;
  padding-top: ${space(10)};
`;

export const BaseInner = styled.div`
  position: relative;
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
