export const saveAuth = (token, user) => {
  localStorage.setItem('authToken', token);
  if (user) localStorage.setItem('userData', JSON.stringify(user));
};
