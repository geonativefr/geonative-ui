export type ClickActionType = string | (() => void) | Promise<void> | null;

export interface ActionType {
  label?: string;
  description?: string;
  as?: string;
  attr?: string;
  clickAction: ClickActionType;
}
