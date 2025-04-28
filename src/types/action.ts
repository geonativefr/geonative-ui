export type clickActionType = string | (() => void) | Promise<void> | null;

export type ActionType = {
  label?: string;
  as?: string;
  attr?: string;
  clickAction: clickActionType;
};

