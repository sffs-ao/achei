import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../Elements/Button";
import "./UserProfile.css";
import { useContext } from "react";
import { UserContext } from "../../../hooks/UserContext";
import { APP_NAME, BASE_URL, IMAGE_URL } from "../../../utils/API";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossIcon, X } from "lucide-react";
import { toast } from "react-toastify";
import zod from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Componente de perfil de usuário

const schema = zod.object({
  currentPassword: zod
    .string({ required_error: "Campo obrigatorio" }),
    newPassword: zod
    .string({ required_error: "Campo obrigatorio" })
});
export default function UserProfile({ act }) {
  const { user } = useContext(UserContext);
 // console.log("O id é:", user.id);
  const[open, setOpen] = useState(false)
 
  /*   console.log(user); */
  return (
    <div className="card shadow-sm p-4" id="profile-area">
      <div className="d-flex align-items-center">
        <img
          src={
            user.profile_image == null
              ? "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              : `${IMAGE_URL}${user.profile_image}`
          }
          alt={`${user.name}`}
          className="rounded-circle me-3 img-user-profile"
          style={{ width: "100px", height: "100px" }}
        />
        <div className="profile-user-details">
          <h2 className="mb-1 profile-user-name">{user.name}</h2>
          <p className="text-muted mb-0">{user.email}</p>
          <p className="text-muted mb-0">{user.user_title}</p>
        </div>
      </div>
      <div className="mt-3 button-group">
   <UploadImageProfile img={"https://cdn-icons-png.flaticon.com/512/1946/1946429.png"}/>
  
     <ChangePasswordProfile/>
      </div>
      <div className="mt-4">
        <h4 className="font-bold">Registo de Atividade</h4>
        <ul className="activity-log list-group">
          {act.activityLog.map((activity, index) => (
            <li key={index} className="list-group-item">
              <strong>{activity.date}:</strong> {activity.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
 

function UploadImageProfile({img}) {
  const[selectedImage, setSelectedImage] = useState(null)
  const[preview, setPreview] = useState(null)
  const fileInputRef = useRef(null);
  const[loading, setLoading] = useState(false)

  // Função para acionar o clique no input de arquivo
  function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }
  function imageChange(params) {
    
    const file = params.target.files[0];
    if (file) {
      // Gerar uma URL de pré-visualização
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedImage(file);
    }
    setSelectedImage(file);
  }

 async function handleButtonUpload() {
    setLoading(true)
    if (!selectedImage) {
      alert("Nenhuma imagem selecionada.");
      return;
    }
    const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
    const formData = new FormData();
    formData.append("profileImage", selectedImage);
    try {
      const response = await fetch(`${BASE_URL}/profile/update-photo`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: formData,
        
      });
    const data = await response.json()
    toast.success("Foto atualizada com sucesso")    
      setPreview(null); // Limpar a pré-visualização após o envio
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false)
    }
  }
  return (  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button
          typeClass="btn-primary"
          id="btn-change-image"
          text="Alterar Imagem"
        />
     
    </Dialog.Trigger>
    <Dialog.Portal className="bg-black/55">
      <Dialog.Overlay className="bg-black/15 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Carregar Foto
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          Atualize sua foto de perfil.
        </Dialog.Description>
        <div className="flex gap-3 justify-center items-center flex-col">
            <img className="rounded-full ring-blue-300 ring-4" width={200} src={preview ?? img} alt="" />
            <button onClick={handleButtonClick} className="bg-blue-500 rounded-lg  ring-blue-750 ring p-1 w-full text-white">Carregar</button>
        </div>
       
        <div className="mt-[25px] flex justify-end gap-2">
           <form>
              <input className="hidden" ref={fileInputRef} onChange={imageChange} type="file" />
                <button type="button" onClick={handleButtonUpload} className="bg-green-600 text-white text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-lg px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                    {loading ? <span>Carregando...</span> : <span>Salvar imagem</span>}
                </button>
            </form>
          <Dialog.Close asChild>
              <button className="ring-zinc-200 ring-2 rounded-lg text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center  px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                  Cancelar
                </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <X />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>)
}


function ChangePasswordProfile() {
  const[loading, setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(schema),
  })

 async function onSubmitPassword(data) {
  alert(JSON.stringify(data))  
  setLoading(true)
    const AUTH_TOKEN = window.localStorage.getItem(`${APP_NAME}_`);
    try {
      const response = await fetch(`${BASE_URL}/profile/update-password`, {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify(data),
        
      });
      console.log(response)
    const dataObject = await response.json()
 //   console.log(data)
    toast.success("Palavra passe atualizada com sucesso")    
    } catch (error) {
      console.error(error);
      toast.error("Nao foi possivel alterar a Palavra passe")  
    }finally{
      setLoading(false)
    }
  }
  return (  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button
          typeClass="btn-secondary"
          id="btn-change-image"
          text="Alterar Senha"
        />
     
    </Dialog.Trigger>
    <Dialog.Portal className="bg-black/55">
      <Dialog.Overlay className="bg-black/15 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
         Alterar palavra passe
        </Dialog.Title>
        <Dialog.Description className="flex flex-col gap-2 text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          Palavra passe Atual
          
        </Dialog.Description>
        <form  onSubmit={form.handleSubmit(onSubmitPassword)} className="flex flex-col gap-2 w-full">
              <input {...form.register("currentPassword")} placeholder="Palavra passe atual" type="password"/>
              <input {...form.register("newPassword")} placeholder="Nova palavra-passe" className="" type="password" />
              <input placeholder="Insira novamente a nova palavra passe" className="" type="password" />
                
                <div className="mt-[25px] flex justify-end gap-2">
                  <button type="submit"  className="bg-green-600 text-white text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-lg px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                      {loading ? <span>Carregando...</span> : <span>Salvar</span>}
                  </button>
                    <Dialog.Close asChild>
                        <button className="ring-zinc-200 ring-2 rounded-lg text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center  px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                            Cancelar
                          </button>
                    </Dialog.Close>
                  </div>
            </form>
       
     
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <X />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>)
}
