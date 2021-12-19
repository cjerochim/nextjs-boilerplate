import styled from "@emotion/styled";
import space from "src/utils/space";

const FormDivider = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin-top: ${space(6)};
  margin-bottom: ${space(6)};
  background-color: ${({ theme }) => theme.palette.grey[800]};
`;

export default FormDivider;
