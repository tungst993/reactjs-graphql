export const localStore = {
  ACCESS_TOKEN: 'access-token',
  CLIENT: 'client',
  UID: 'uid',
  EXPIRY: 'expiry',
  TOKEN_TYPE: 'token-type',
  GRAPHQL_TOKEN: 'token',
  AUTHORIZATION: 'Authorization',
  ROLE: 'role',
  USER_ID: 'user_id',
};
export const setLocalStore = (header: any) => {
  localStorage.setItem(localStore.ACCESS_TOKEN, header['access-token']);
  localStorage.setItem(localStore.CLIENT, header.client);
  localStorage.setItem(localStore.UID, header.uid);
  localStorage.setItem(localStore.EXPIRY, header.expiry);
  localStorage.setItem(localStore.TOKEN_TYPE, header['token-type']);
  localStorage.setItem(localStore.GRAPHQL_TOKEN, header['graphql-token']);
  // localStorage.setItem(localStore.ROLE, header.role);
  localStorage.setItem(localStore.USER_ID, header.user_id);
  localStorage.setItem(localStore.AUTHORIZATION, header['graphql-token']);
};
export const removeLocalStore = () => {
  localStorage.removeItem(localStore.ACCESS_TOKEN);
  localStorage.removeItem(localStore.CLIENT);
  localStorage.removeItem(localStore.UID);
  localStorage.removeItem(localStore.EXPIRY);
  localStorage.removeItem(localStore.TOKEN_TYPE);
  localStorage.removeItem(localStore.GRAPHQL_TOKEN);
  // localStorage.removeItem(localStore.ROLE);
  localStorage.removeItem(localStore.USER_ID);
};

export const getToken = () => {
  return localStorage.getItem(localStore.ACCESS_TOKEN);
};

export const getLocalStorageItem = (name: string) => {
  return localStorage.getItem(name);
};
