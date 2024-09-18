export const BASE_URL = "https://www.enanza.ao/api";
export const APP_NAME = "enanza";
export const IMAGE_URL = " https://www.enanza.ao/storage/corporate/1/";

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

export const GET_STUDENTS = async () => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/students/store-data`, {
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


export const POST_INSTRUCTOR = async (data) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response)
  return await response.json();
};

export const POST_STUDENT = async (data) => {
  const response = await fetch(`${BASE_URL}/students/store-data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response)
  return await response.json();
};

export const POST_CLASSES = async (data) => {
  const response = await fetch(`${BASE_URL}/classes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response)
  return await response.json();
};

export const GET_CLASSES = async () => {
  const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
  const response = await fetch(`${BASE_URL}/classes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return await response.json();
};
