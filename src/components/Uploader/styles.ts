import styled from "@emotion/styled";
import em from "src/utils/em";
import space from "src/utils/space";

export const Base = styled.label`
  font-size: ${space()};
  position: relative;
  display: block;
`;

interface PanelProps {
  active: boolean;
}

export const Panel = styled.span<PanelProps>`
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  padding: ${space(1)} ${space()};
  border-radius: ${em(5)};
  margin-bottom: ${space(4)};
  min-height: ${em(72)};
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const PanelList = styled.ul`
  position: relative;
  display: block;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;

  > li {
    padding-bottom: 0.5em;
    padding-top: 0.5em;
    border-bottom: ${({ theme }) => `1px solid ${theme.palette.grey[700]}`};
  }
  > li:first-child {
    padding-top: 0;
  }

  > li:last-child {
    border: none;
    padding-bottom: 0;
  }
`;

export const PanelFooter = styled.span`
  position: relative;
  display: flex;
  margin-top: ${space()};
  justify-content: flex-end;
`;

export const Input = styled.input`
  display: none;
`;
