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

