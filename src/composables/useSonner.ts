import { toast } from 'vue-sonner';
import type { ActionType, AlertLevel } from '@geonative/ui/types';
import { ALERT_DEFAULT, ALERT_ERROR, ALERT_INFO, ALERT_SUCCESS, ALERT_WARNING } from '@geonative/ui/constants';

export function useSonner() {
  /**
   * Show a Sonner alert
   * @param type AlertLevel - ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING, ALERT_INFO
   * @param title string - Title of the alert
   * @param description string - Description of the alert
   * @param action ActionType - Action to be performed on click
   */
  const showSonner = (type: AlertLevel = ALERT_INFO, title: string, description?: string, action?: ActionType) => {
    toast[type](title, {
      description: description,
      action: action
        ? {
            label: action.label || title,
            onClick: action.clickAction,
          }
        : undefined,
    });
    console.log('Sonner', type, title, description, action);
  };

  const showDefaultSonner = (title: string, description?: string, action?: ActionType) => {
    showSonner(ALERT_DEFAULT, title, description, action);
  };

  const showSuccessSonner = (title: string, description?: string, action?: ActionType) => {
    showSonner(ALERT_SUCCESS, title, description, action);
  };

  const showErrorSonner = (title: string, description?: string, action?: ActionType) => {
    showSonner(ALERT_ERROR, title, description, action);
  };

  const showWarningSonner = (title: string, description?: string, action?: ActionType) => {
    showSonner(ALERT_WARNING, title, description, action);
  };

  const showInfoSonner = (title: string, description?: string, action?: ActionType) => {
    showSonner(ALERT_INFO, title, description, action);
  };

  const showPromiseSonner = (
    promise: () => Promise<void>,
    title: string,
    description?: string,
    action?: ActionType
  ) => {
    toast.promise(promise, {
      loading: title,
      description: description,
      action: action
        ? {
            label: action.label || title,
            onClick: action.clickAction,
          }
        : undefined,
    });
    return promise;
  };

  return {
    showDefaultSonner,
    showSuccessSonner,
    showErrorSonner,
    showWarningSonner,
    showInfoSonner,
    showPromiseSonner,
  };
}
