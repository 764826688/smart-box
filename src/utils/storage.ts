const getStorageItem = (
  key: string,
  storageType: 'localStorage' | 'sessionStorage',
) => {
  const item = window[storageType].getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item);
  } catch (error) {
    console.error(`获取${key}失败：` + error);
    return null;
  }
};

const setStorageItem = (
  key: string,
  value: any,
  storageType: 'localStorage' | 'sessionStorage',
) => {
  if (!value || !key) return;
  try {
    window[storageType].setItem(key, value);
  } catch (error) {
    console.error(`添加${key}失败：` + error);
    return;
  }
};

const removeStorageItem = (
  key: string,
  storageType: 'localStorage' | 'sessionStorage',
) => {
  if (!key) return;
  window[storageType].removeItem(key);
};

const clearStorageItem = (storageType: 'localStorage' | 'sessionStorage') => {
  window[storageType].clear();
};

export const getLocalStorageItem = (key: string) =>
  getStorageItem(key, 'localStorage');
export const getSessionStorageItem = (key: string) =>
  getStorageItem(key, 'sessionStorage');
export const setLocalStorageItem = (key: string, value: any) =>
  setStorageItem(key, value, 'localStorage');
export const setSessionStorageItem = (key: string, value: any) =>
  setStorageItem(key, value, 'sessionStorage');
export const removeLocalStorageItem = (key: string) =>
  removeStorageItem(key, 'localStorage');
export const removeSessionStorageItem = (key: string) =>
  removeStorageItem(key, 'sessionStorage');
export const clearLocalStorageItem = () => clearStorageItem('localStorage');
export const clearSessionStorageItem = () => clearStorageItem('sessionStorage');
