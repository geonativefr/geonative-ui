export type ClickActionType = string | (() => void) | Promise<void> | null;

export type ActionType = {
  label?: string;
  as?: string;
  attr?: {
    onClick?: () => void;
    href?: string;
    to?: string;
    [key: string]: string | number | boolean | (() => void) | undefined;
  };
  clickAction: ClickActionType;
};
