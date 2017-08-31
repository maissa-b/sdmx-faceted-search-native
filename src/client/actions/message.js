export const ALERT = 'ALERT';
export const ERROR = 'DANGER';
export const SUCCESS = 'SUCCESS';
export const RUNTIME_ERROR = 'Runtime Error';
export const alert = (label, header = RUNTIME_ERROR, status = ERROR) => ({ type: ALERT, header, label, status });
