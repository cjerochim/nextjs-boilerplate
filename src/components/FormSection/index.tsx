import { ReactNode } from "react";

import {
  Base,
  BaseBody,
  BaseGroup,
  BaseHeader,
  BaseItem,
  Title,
  Description,
} from "./styles";

interface FormItemProps {
  children: ReactNode;
}

const FormItem = ({ children }: FormItemProps) => (
  <BaseItem className="form-item">{children}</BaseItem>
);

interface FormGroupProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  variant: "default" | "inline";
}

const FormGroup = ({
  children,
  title,
  description,
  variant,
}: FormGroupProps) => {
  const hasTitle = typeof title !== "undefined";
  const hasDescription = typeof description !== "undefined";
  return (
    <BaseGroup variant={variant}>
      <BaseHeader noTitle={!hasTitle}>
        {hasTitle && <Title variant="h5">{title}</Title>}
        {hasDescription && (
          <Description variant="body1">{description}</Description>
        )}
      </BaseHeader>
      {children && <BaseBody variant={variant}>{children}</BaseBody>}
    </BaseGroup>
  );
};

FormGroup.defaultProps = {
  variant: "default",
};

interface FormSectionProps {
  children: ReactNode;
}

const FormSection = ({ children }: FormSectionProps) => <Base>{children}</Base>;

//
FormSection.Group = FormGroup;
FormSection.Item = FormItem;

export default FormSection;
