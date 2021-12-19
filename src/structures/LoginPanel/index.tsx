import type { ReactNode } from "react";
import { Typography, FormHelperText } from "@mui/material";
import {
  Base,
  Brand,
  BaseHeader,
  BaseForm,
  BaseFooter,
  FormGroup,
  VisuallyHidden,
  Divider,
  Heading,
} from "./styles";

interface LoginPanelFormItem {
  children: ReactNode;
}

const FormItem = ({ children }: LoginPanelFormItem) => (
  <FormGroup>{children}</FormGroup>
);

interface LoginPanelProps {
  helperText?: string;
  children: ReactNode;
}

const LoginPanel = ({ children, helperText }: LoginPanelProps) => {
  return (
    <Base>
      <BaseHeader>
        <Brand>
          <VisuallyHidden>Brand</VisuallyHidden>
        </Brand>
        <Divider />
        <Heading variant="h3">Login</Heading>
      </BaseHeader>
      {children}
      {helperText!.length > 0 && (
        <FormHelperText error>{helperText}</FormHelperText>
      )}
      <Divider />
      <BaseFooter>
        <Typography variant="body2">
          Not registered yet? <strong>Create an Account</strong>
        </Typography>
      </BaseFooter>
    </Base>
  );
};

LoginPanel.Form = BaseForm;
LoginPanel.FormItem = FormItem;

LoginPanel.defaultProps = {
  helperText: "",
};

export default LoginPanel;
