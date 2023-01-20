import {
  ButtonPropsModel,
  ButtonVariant,
} from "../../models/components/Button";
import React from "react";

const Button: React.FunctionComponent<
  React.PropsWithChildren<React.HTMLProps<HTMLButtonElement> & ButtonPropsModel>
> = ({ children, variant = "primary", ...rest }) => {
  const variantClassName: Record<ButtonVariant, string> = {
    primary:
      "px-6 py-2 rounded-md flex items-center text-white shadow-lg active:bg-blue-700 bg-blue-500",
  };

  return (
    <button className={`${variantClassName?.[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
