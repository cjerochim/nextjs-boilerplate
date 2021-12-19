import { ReactNode } from "react";

import {
  Base,
  Header,
  HeaderInner,
  Body,
  BodyInner,
  NavOverlay,
  Nav,
  Stage,
} from "./styles";

interface LayoutDashboardBaseProps {
  active?: boolean;
  children?: ReactNode;
  navigation?: ReactNode;
  header?: ReactNode;
  onClose: () => void;
}

const LayoutDashboardBase = ({
  active,
  children,
  header,
  navigation,
  onClose,
}: LayoutDashboardBaseProps) => {
  return (
    <Base>
      <Header>
        <HeaderInner>{header}</HeaderInner>
      </Header>
      <Body>
        <BodyInner>
          <Nav active={active!}>{navigation}</Nav>
          <NavOverlay onClick={() => onClose()} active={active!} />
          <Stage>{children}</Stage>
        </BodyInner>
      </Body>
    </Base>
  );
};

LayoutDashboardBase.defaultProps = {
  active: false,
};

export default LayoutDashboardBase;
