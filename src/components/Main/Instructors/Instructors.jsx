import React, { useState } from "react";
import Button from "../../Elements/Button";
import * as Dialog from "@radix-ui/react-dialog"
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../../utils/lib";
export default function Instructors() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredUsers = []

  return (
    <section className="section-area">
    <div className="section-container">
      <div className="header-actions">
        <h1>Formadores</h1>
        <p>Página de gerenciamento de formadores.</p>
        <div className="top-container">
          <input
            type="text"
            placeholder="Pesquisar formadores..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <Modal
           
          />
        </div>
      </div>
      <table className="table-content">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers &&
            filteredUsers.map((user) => (
              <tr key={user.email} onClick={() => handleRowClick(user.id)}>
                <td>
                  <img
                    /* src={user.image} */
                    src={
                      user.profile_image == null
                        ? "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                        : `${IMAGE_URL}${user.profile_image}`
                    }
                    alt={user.name}
                    className="table-image"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.user_title}</td>
                <td className={`status-${user.account_status.toLowerCase()}`}>
                  {user.account_status == 0 && "Pendente"}
                  {user.account_status == 10 && "Pendente"}
                  {user.account_status == 1 && "Activo"}
                  {user.account_status == 2 && "Bloquado"}
                  {/* {user.status} */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </section>
  );
}

const Previligies = () => {

  const form = useFormContext();

return <Dialog.Root>
    <Dialog.Trigger asChild>
    <button className="px-4 py-2 bg-blue-800 text-white text-sm font-extrabold rounded hover:bg-blue-600 w-full hover:ring-4 hover:ring-blue-100 transition-all">
        Selecionar Previligios
    </button>
    </Dialog.Trigger>
    <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg
         w-full max-w-[600px] ">
          <Dialog.Title className="text-lg font-semibold">Selecionar Previligies</Dialog.Title>
          <Dialog.Close asChild>
            <button className="absolute text-2xl top-2 right-2 text-gray-600 hover:text-gray-900 ">
              <span aria-hidden="true text-2xl">&times;</span>
            </button>
          </Dialog.Close>
          <div className="max-h-96 overflow-y-scroll">
              <table className="table-content">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Visualizar</th>
                  <th>Adicionar</th>
                  <th>Editar</th>
                  <th>Apagar</th>
                </tr>
              </thead>
             <tbody>
                <tr>
                  <td>
                    Usuarios
                  </td>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td><input type="checkbox" name="" id="" /></td>
                </tr>
                <tr>
                  <td>
                    Formadores
                  </td>
                  <td>Sim</td>
                  <td>Sim</td>
                  <td>Nao</td>
                  <td>Sim</td>
                </tr>
            
          </tbody>
              </table>
          </div>  
        </Dialog.Content>
      </Dialog.Portal>
  </Dialog.Root>
}

const Modal = () => {
  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {user_type: "3", account_status: 0}
  });
  function handleSubmitIntruct(data) {
    console.log(data)
  }
  console.log(form.formState.errors)
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Cadastrar Formador
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-full max-w-[600px]">
          <Dialog.Title className="text-lg font-semibold">Cadastro Novo Formador</Dialog.Title>
          <Dialog.Close asChild>
            <button className="absolute top-2 text-2xl right-2 text-gray-600 hover:text-gray-900">
              <span aria-hidden="true">&times;</span>
            </button>
          </Dialog.Close>
          <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitIntruct)} className="mt-4 flex flex-col items-start w-full gap-2">
              <div className="w-full">
                <label className="block">Nome:</label>
                <input {...form.register("name")} type="text" className=" block w-full p-2 border border-gray-300 rounded " />
              </div>
           <div className="w-full">
           <label className="block">E-mail:</label>
           <input type="email" {...form.register("email")} className=" block w-full p-2 border border-gray-300 rounded"  />
           </div>

          <div className="w-full" >
          <label className="block">Título do Formador:</label>
          <input type="text" {...form.register("user_title")} className=" block w-full p-2 border border-gray-300 rounded" required />
          </div>
           <div className="w-full" >
            <label className="block">Tipo de Usuário: </label>
              <select {...form.register("user_type")} className=" block w-full p-2 border border-gray-300 rounded" required>
                <option value="1">Administrador Geral</option>
                <option value="2">Gestor</option>
                <option value="3" >Formador</option>
              </select>
          </div>
            <Previligies />

           <div className="w-full flex items-center justify-end gap-2">
            <Dialog.Close asChild>
                <button className="px-4 py-2 ring-zinc-300 ring-1 rounded ">Cancelar</button>
            </Dialog.Close>
            <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600">
                Salvar
              </button>
           </div>
          </form>
          </FormProvider>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
 
