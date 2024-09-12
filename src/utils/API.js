export const BASE_URL = "https://www.enanza.ao/api";
export const APP_NAME = "enanza";
export const IMAGE_URL = "";

export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};
export const validateCodeTwoFactory = async (code, email, password) => {
  console.log(code, email, password);
  const response = await fetch(`${BASE_URL}/login/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password, code: code }),
  });
  return await response.json();
};

export const saveLocalStorageToken = (token) => {
  window.localStorage.setItem(`${APP_NAME}_`, token);
};

export const GET_PROFILES = async () => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return await response.json();
};

export const GET_PROFILE = async (id) => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return await response.json();
};
