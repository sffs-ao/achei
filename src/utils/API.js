export const BASE_URL = "https://www.enanza.ao/api";
const APP_NAME = "enanza";
export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, 
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        }, 
        body: JSON.stringify({email, password})});
    return response.json();
}
export const validateCodeTwoFactory = async(code, email, password) => 
{
  console.log(code, email, password)
      const response = await fetch(`${BASE_URL}/login/verify`, {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      }, 
      body: JSON.stringify({email:email, password:password, code:code})
    })
    return response.json()
}

export const saveLocalStorageToken = (token) => 
{
  window.localStorage.setItem(`${APP_NAME}_`, token);
}