import type { ReactNode } from "react";

import { Base, BaseGroupPrimary, BaseGroupSecondary } from "./styles";

interface LoginProps {
  children: ReactNode;
}

const Login = ({ children }: LoginProps) => (
  <BaseGroupPrimary>{children}</BaseGroupPrimary>
);

interface BackgroundProps {}

const Background = ({}: BackgroundProps) => <BaseGroupSecondary />;

interface ViewLoginProps {
  children: ReactNode;
}

const ViewLogin = ({ children }: ViewLoginProps) => <Base>{children}</Base>;

ViewLogin.Login = Login;
ViewLogin.Background = Background;

export default ViewLogin;
