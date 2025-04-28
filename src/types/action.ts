import { startsWithHttp } from '@geonative/ui/helpers';

export type clickActionType = string | (() => void) | Promise<void> | null;

export type ActionType = {
  label?: string;
  as?: string;
  attr?: string;
  clickAction: clickActionType;
};

export function getAction(clickAction: ActionType | undefined, actionClick: clickActionType) {
  const isInternalLink = typeof actionClick === 'string';
  const isExternalLink = typeof actionClick === 'string' && startsWithHttp(actionClick);
  const isFunctionLink = typeof actionClick === 'function';

  if (isFunctionLink) {
    return {
      as: 'span',
      attr: { onClick: actionClick },
      clickAction: clickAction,
    };
  }
  if (isExternalLink) {
    return {
      as: 'a',
      attr: { href: actionClick },
      clickAction: clickAction,
    };
  }
  if (isInternalLink) {
    return {
      as: 'router-link',
      attr: { to: actionClick },
      clickAction: clickAction,
    };
  }
  return {
    as: 'span',
    attr: {},
    clickAction: clickAction,
  };
}
