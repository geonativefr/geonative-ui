export interface ClickActionType {
  type: string | (() => void) | Promise<void> | null;
}

export interface ActionType {
  label?: string;
  as?: string;
  attr?: string;
  clickAction: ClickActionType;
}
