import { toast } from 'vue-sonner';
import type { ActionType, AlertLevel } from '@geonative/ui/types';
import { ALERT_DEFAULT, ALERT_ERROR, ALERT_INFO, ALERT_SUCCESS, ALERT_WARNING } from '@geonative/ui/constants';
import type { Component } from 'vue';

export function useSonner() {
  /**
   * Show a Sonner alert
   * @param type AlertLevel - ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING, ALERT_INFO
   * @param title string|Component - Title of the alert
   * @param description string|Component - Description of the alert
   * @param action ActionType - Action to be performed on click
   */
  const showSonner = (
    type: AlertLevel = ALERT_INFO,
    title: string|Component,
    description?: string|Component,
    action?: ActionType
  ) => {
    toast[type](title, {
      description: description,
      action: action
        ? {
            label: action.label || title,
            onClick: action.clickAction,
          }
        : undefined,
    });
  };

  const showDefaultSonner = (title: string|Component, description?: string|Component, action?: ActionType) => {
    showSonner(ALERT_DEFAULT, title, description, action);
  };

  const showSuccessSonner = (title: string|Component, description?: string|Component, action?: ActionType) => {
    showSonner(ALERT_SUCCESS, title, description, action);
  };

  const showErrorSonner = (title: string|Component, description?: string|Component, action?: ActionType) => {
    showSonner(ALERT_ERROR, title, description, action);
  };

  const showWarningSonner = (title: string|Component, description?: string|Component, action?: ActionType) => {
    showSonner(ALERT_WARNING, title, description, action);
  };

  const showInfoSonner = (title: string|Component, description?: string|Component, action?: ActionType) => {
    showSonner(ALERT_INFO, title, description, action);
  };

  const showPromiseSonner = (
    promise: Promise<any> | (() => Promise<any>),
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
    showSonner,
    showDefaultSonner,
    showSuccessSonner,
    showErrorSonner,
    showWarningSonner,
    showInfoSonner,
    showPromiseSonner,
  };
}
