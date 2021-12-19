import styled from "@emotion/styled";
import em from "src/utils/em";
import mq from "src/utils/mq";
import space from "src/utils/space";

const ButtonGroup = styled.div`
  position: relative;
  width: 100%;

  & > :first-child {
    margin-bottom: ${space()};
    flex: 1;
  }

  & > :last-child {
    margin-top: ${space()};
    flex: 1;
  }

  ${mq("sm")} {
    display: flex;
    width: ${em(420)};

    & > :first-child {
      max-width: none;
      margin-bottom: 0;
      margin-right: ${space(2)};
      flex: 1;
    }

    & > :last-child {
      max-width: none;
      margin-top: 0;
      margin-left: ${space(2)};
      flex: 1;
    }
  }
`;

export default ButtonGroup;
