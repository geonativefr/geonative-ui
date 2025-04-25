import { ALERT_SUCCESS, ALERT_ERROR, ALERT_WARNING, ALERT_INFO } from '@geonative/ui/constants';

export type AlertSuccess = typeof ALERT_SUCCESS;
export type AlertError = typeof ALERT_ERROR;
export type AlertWarning = typeof ALERT_WARNING;
export type AlertInfo = typeof ALERT_INFO;
export type AlertLevel = AlertSuccess | AlertError | AlertWarning | AlertInfo;
