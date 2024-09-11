import { useState } from "react";
import Login from "./Login";
import SignHeader from "./SignHeader";
import TwoFactory from "./TwoFactory";
 
export default function Sign() {
 const [step, setStep] = useState(1)
  const [userLogin,setUser] = useState({})
 function nextStep() {
    setStep(state => state+1)
 }
 function setUserLogin(email, password) {
  setUser({email:email, password:password})
 }
  return (
    <div>
      <SignHeader />

      <div className="w-full flex justify-center items-center h-screen">
         {step === 1 && <Login nextStep={nextStep} setUserLogin={setUserLogin}/>}
         {step === 2 && <TwoFactory userLogin={userLogin}/>}
      </div>
    </div>
  );
}
