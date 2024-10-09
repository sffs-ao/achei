import { z } from "zod";
export const BASE_URL = "https://app.enanza.ao/api";
export const APP_NAME = "achei_portal";


export const schemaCreateStudent = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6)
})

export type CreateStudent = z.infer<typeof schemaCreateStudent>;

export const SUBMIT_CODE_VERIFY = async ({email, code}: {email:string, code: string}) => {
    const response = await fetch(`${BASE_URL}/account/verify-email/${email}/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  };

  export const login = async ({email, password}:{email:string, password:string}) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  };

  export const CREATE_ACCOUNT = async (data: CreateStudent) => {
    const response = await fetch(`${BASE_URL}/account/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };

  export const saveLocalStorageToken = (token: string) => {
    window.localStorage.setItem(`${APP_NAME}_`, token);
  };

  export const getsaveLocalStorageToken = () => {
    window.localStorage.getItem(`${APP_NAME}_`);
  };


  export const removeLocalStorageToken = () => {
    window.localStorage.removeItem(`${APP_NAME}_`);
  }


  export const SUBMIT_DATA_STUDENT = async (data: {
    full_name: string;
    birth_date: string;
    id_type: string;
    id_number: string;
    phone_number: string;
    address: string;
    observations: string;
  }) => {
    const response = await fetch(`${BASE_URL}/students/store-data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };