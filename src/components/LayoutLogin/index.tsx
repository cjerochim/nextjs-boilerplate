import { ReactNode } from "react";

import { Base } from "./styles";

interface LayoutLoginProps {
  children: ReactNode;
}

const LayoutLogin = ({ children }: LayoutLoginProps) => {
  return <Base>{children}</Base>;
};

export default LayoutLogin;
