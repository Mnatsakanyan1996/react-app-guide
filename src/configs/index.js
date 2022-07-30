const {
  REACT_APP_BASE_URL,
  REACT_APP_VERSION,
  REACT_APP_PARTNER_GUID,
  REACT_APP_RECAPTCHA_SITE_KEY,
  REACT_APP_PARTNER_ALIAS,
  REACT_APP_ICON_URL,
} = process.env;

export const baseUrl = REACT_APP_BASE_URL;
export const version = REACT_APP_VERSION;
export const partnerGuid = REACT_APP_PARTNER_GUID;
export const recaptchaSiteKey = REACT_APP_RECAPTCHA_SITE_KEY;
export const partnerAlias = REACT_APP_PARTNER_ALIAS;
export const iconUrl = REACT_APP_ICON_URL;

export const apiUrl = `${baseUrl}/${partnerGuid}/0/en`;
