import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
/* import { Cross2Icon } from "@radix-ui/react-icons"; */
import "./styles.css";

const ModalRegister = ({ submit, setSubmit }: {submit:boolean, setSubmit:(state:boolean)=>void}) => (
  <Dialog.Root open={submit} onOpenChange={setSubmit}>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Confirmar o Email</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Digite abaixo o código enviado no seu email
        </Dialog.Description>
        <fieldset className="Fieldset">
          <input
            className="Input"
            id="name"
            placeholder="Digite o código aqui."
          />
        </fieldset>
        <div
          style={{
            display: "flex",
            marginTop: 25,
            justifyContent: "flex-end",
          }}
        >
          <Dialog.Close asChild>
            <button className="Button green">Confirmar</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default ModalRegister;
