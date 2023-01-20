export type ButtonVariant = "primary";

export enum ButtonTypes {
  Button = "button",
  Submit = "submit",
  React = "reset",
}

export interface ButtonPropsModel {
  variant?: ButtonVariant;
  type?: ButtonTypes | undefined;
}
