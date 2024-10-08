import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles.css";
import {useQuery, useMutation} from "@tanstack/react-query"
import { saveLocalStorageToken, SUBMIT_CODE_VERIFY } from "../../../../lib/API";
import { UserContext, useUserContext } from "@/hooks/UserContext";
import { Loader2 } from "lucide-react";


const ModalRegister = ({ submit, setSubmit, email }: {submit:boolean, setSubmit:(state:boolean)=>void , email: string}) => {
  const [code, setCode] = React.useState("");
  const { setUser } = useUserContext()
  const {mutateAsync: createRegister, isPending} = useMutation({
    mutationFn: SUBMIT_CODE_VERIFY,
    onSuccess(data: any){
      alert("Email confirmado com sucesso")
      console.log("onSuccess ", data)
      saveLocalStorageToken(data.token)
      setUser(data.student)
    },
    onError(error){
      alert("Código inválido")
      console.log("onError ", error)
    }
  });
  
  function handleSubmit() {
    if (code.length < 6) {
      alert("Código inválido");
      return
    }
    createRegister({email, code})
  }

 return (
  <Dialog.Root open={submit} onOpenChange={setSubmit}>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent" onInteractOutside={(event) => event.preventDefault()}>
        <Dialog.Title className="DialogTitle">Confirmar o Email</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Digite abaixo o código enviado no seu email
        </Dialog.Description>
        <fieldset className="Fieldset">
          <input
            className="Input"
            id="name"
            placeholder="Digite o código aqui."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          style={{
            display: "flex",
            marginTop: 25,
            justifyContent: "flex-end",
          }}
        />
        </fieldset>
         
            <button onClick={handleSubmit} className="Button green flex gap-2 items-center justify-center">  Confirmar {isPending && <Loader2 className="animate-spin" size={14}/>}</button>
       
     
        <Dialog.Close asChild>Cancelar</Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>)
};

export default ModalRegister;
