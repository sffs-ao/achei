export const BASE_URL = "https://app.enanza.ao/api";
export const APP_NAME = "achei_portal";


export const SUBMIT_CODE_VERIFY = async (email:string, code:string) => {
    const response = await fetch(`${BASE_URL}/account/verify-email/${email}/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  };