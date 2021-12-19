import styled from "@emotion/styled";
import em from "src/utils/em";
import space from "src/utils/space";

const Panel = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  padding: ${space()};
  border-radius: ${em(5)};
`;

export default Panel;
