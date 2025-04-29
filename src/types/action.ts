export type ClickActionType = string | (() => void) | Promise<void> | null;

export type ActionType = {
  label?: string;
  as?: string;
  attr?: string;
  clickAction: ClickActionType;
};
