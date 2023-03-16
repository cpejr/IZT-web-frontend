const isLoggedInKey = 'isLoggedIn';

export const getIsLoggedIn = () =>
  JSON.parse(localStorage.getItem(isLoggedInKey));
export const setIsLoggedIn = () =>
  localStorage.setItem(isLoggedInKey, JSON.stringify(true));
export const removeIsLoggedIn = () => localStorage.removeItem(isLoggedInKey);
